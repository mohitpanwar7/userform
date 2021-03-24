from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import psycopg2

app = Flask(__name__)
api = Api(app)


@app.route('/users')
def get():
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = "select * from personaldetails;"
    cursor.execute(query1)
    rows = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)


    queryforid = "select id from personaldetails;"
    cursor.execute(queryforid)
    rowsid = cursor.fetchall()    
    id_index = []
    idquerydata =[]
    
    for item in rowsid:
        id_index.append(item[0])

    exitres =[]
    for id in id_index:
        idquery = f"select * from personaldetails where id={id}"
        cursor.execute(idquery)
        querydata = cursor.fetchall()
        userdata = []
        
        for index, item in enumerate(querydata):
            usercolumnValue = {}
            j=0
            for i in colnames:
                usercolumnValue[i] = item[j]
                j += 1
            
        userdata.append(usercolumnValue)

        addressquery = f"select * from useraddress where userid={id}"
        cursor.execute(addressquery)
        addressdata =cursor.fetchall()
        addresscolnames = [desc[0] for desc in cursor.description]
        addresslist =[]
        for address in addressdata:
            columnValue = {}
            for index, item in enumerate(address):
                columnValue[addresscolnames[index]] = item
            addresslist.append(columnValue)
        usercolumnValue["addresslist"] =  addresslist

        # userdata.append({"addresslist":addresslist})
        idquerydata.append(usercolumnValue)

        


    
    connection.close()

    return jsonify(idquerydata)


@app.route('/users/create', methods=['POST'])
def post():
    if request.method == 'POST':
        request_data = request.get_json()
        firstname = request_data['firstname']
        lastname = request_data['lastname']
        mobilenumber = request_data['mobilenumber']
        email = request_data['email']
        gender = request_data['gender']
        maritalstatus = request_data['maritalstatus']
        dob = request_data['dob']

    # data = request.form.to_dict(flat=False)
    print("firstname", firstname)
    print("lastname", lastname)
    print("mobilenumber", mobilenumber)
    print("email", email)
    print("gender", gender)
    print("dob", dob)
    print(request_data)
    addressarray = request_data['addressBoxList']
    print("addressarray ==>", addressarray)

    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query = f"INSERT INTO personaldetails(firstname,lastname, mobilenumber, email, gender,dob,maritalstatus) VALUES ('{firstname}','{lastname}',{mobilenumber},'{email}','{gender}','{dob}','{maritalstatus}')returning id;"
    cursor.execute(query)
    last_id = cursor.fetchone()
    query2 = "select * from personaldetails;"
    cursor.execute(query2)
    rows = cursor.fetchall()
    user_id = last_id[0]

    colnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)
    for address in addressarray:
        addressname = address['address']
        city = address['city']
        country = address['country']
        state = address['state']
        zipcode = address['zipcode']
        insertaddressquery = f"INSERT INTO useraddress(userid,address, city, country, state, zipcode) VALUES ({user_id},'{addressname}','{city}', '{country}' ,'{state}',{zipcode});"
        cursor.execute(insertaddressquery)

    connection.commit()
    count = cursor.rowcount
    print(count, "Record inserted successfully into table")
    

    connection.close()
    result = get()
    return result


@app.route('/users/delete/<int:id>')
def delete_user_by_id(id):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    queryforusersearch = f"select * from personaldetails where id = {id}"
    cursor.execute(queryforusersearch)
    userfind = cursor.fetchall()
    print(userfind)
    if (userfind != []):
        queryforuserdelete = f"DELETE FROM personaldetails WHERE id = {id};"
        queryforuseraddressdelete = f"DELETE FROM useraddress WHERE userid = {id};"
        cursor.execute(queryforuserdelete)
        cursor.execute(queryforuseraddressdelete)
        connection.commit()
        print(f"Record with {id} Deleted Successfully from table")
        connection.close()
        result = get()
    else :
        print(f"User with id: {id} Not Found")
        result = jsonify(f"User with id: {id} Not Found")
    # queryforidreset = "ALTER TABLE personaldetails DROP id;ALTER TABLE personaldetails ADD id int PRIMARY KEY;"
    # q = "SET@count = 0;UPDATE TABLE SET id = @count:= @count +1;"
    # cursor.execute(queryforidreset)
    # query2 = "select * from personaldetails;"
    # cursor.execute(query2)
    # record = cursor.fetchall()
    # count = cursor.rowcount
    
    return result

app.run(debug=True)
