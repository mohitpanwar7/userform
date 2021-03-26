from flask import Flask, json, jsonify, request
from flask_restful import Api, Resource
import psycopg2

app = Flask(__name__)
api = Api(app)


@app.route('/users')
def get_all_users_with_address():
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
    idquerydata = []

    for item in rowsid:
        id_index.append(item[0])

    exitres = []
    for id in id_index:
        idquery = f"select * from personaldetails where id={id}"
        cursor.execute(idquery)
        querydata = cursor.fetchall()
        userdata = []

        for index, item in enumerate(querydata):
            usercolumnValue = {}
            j = 0
            for i in colnames:
                usercolumnValue[i] = item[j]
                j += 1

        userdata.append(usercolumnValue)

        addressquery = f"select * from useraddress where userid={id}"
        cursor.execute(addressquery)
        addressdata = cursor.fetchall()
        addresscolnames = [desc[0] for desc in cursor.description]
        addresslist = []
        for address in addressdata:
            columnValue = {}
            for index, item in enumerate(address):
                columnValue[addresscolnames[index]] = item
            addresslist.append(columnValue)
        usercolumnValue["addresslist"] = addresslist

        # userdata.append({"addresslist":addresslist})
        idquerydata.append(usercolumnValue)

    connection.close()

    return jsonify(idquerydata)

@app.route('/users/<int:id>')
def get_user_by_id(id):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = f"select * from personaldetails where id={id};"
    cursor.execute(query1)
    rows = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)


    addressquery = f"select * from useraddress where userid={id}"
    cursor.execute(addressquery)
    addressdata = cursor.fetchall()
    addresscolnames = [desc[0] for desc in cursor.description]
    addresslist = []
    columnValue = {}
    for address in addressdata:
        addresscolumnValue = {}
        for index, item in enumerate(address):
            addresscolumnValue[addresscolnames[index]] = item
        addresslist.append(addresscolumnValue)
    columnValue["addresslist"] = addresslist
    if result != []:
        result = result[0]
        result["addresslist"] =addresslist
        return result
    else:
        result = ["Not Found"]        
    connection.close()

    


@app.route('/users/create', methods=['POST'])
def create_user_by_post_request():
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
        stateid = address['stateid']
        zipcode = address['zipcode']
        insertaddressquery = f"INSERT INTO useraddress(userid,address, city, country, state, stateid, zipcode) VALUES ({user_id},'{addressname}','{city}', '{country}' ,'{state}', {stateid},{zipcode});"
        cursor.execute(insertaddressquery)

    connection.commit()
    count = cursor.rowcount
    print(count, "Record inserted successfully into table")

    connection.close()
    result = get_all_users_with_address()
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
        connection.commit()
        cursor.execute(queryforuseraddressdelete)
        connection.commit()
        print(f"Record with {id} Deleted Successfully from table")
        connection.close()
        result = get_all_users_with_address()
    else:
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


@app.route('/state')
def get_all_state_name_and_id():
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = "select * from state;"
    cursor.execute(query1)
    rows = cursor.fetchall()
    statecolnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[statecolnames[index]] = item
        result.append(columnValue)
    connection.close()

    if (rows != []):
        return jsonify(result)
    else:
        return jsonify("States Not Found in Database")


@app.route('/state/<int:id>')
def get_state_name_by_id(id):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = f"select * from state where id = {id};"
    cursor.execute(query1)
    rows = cursor.fetchall()
    statecolnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[statecolnames[index]] = item
        result.append(columnValue)
    connection.close()

    if (rows != []):
        result = result[0]
        return jsonify(result)
    else:
        return jsonify(f"State with id: '{id}' Not Found in Database")


@app.route('/state/<string:name>')
def get_state_id_by_name(name):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    cname = name.capitalize()
    query1 = f"select * from state where statename = '{cname}';"
    cursor.execute(query1)
    rows = cursor.fetchall()
    statecolnames = [desc[0] for desc in cursor.description]
    result = []
    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[statecolnames[index]] = item
        result.append(columnValue)
    connection.close()

    if (rows != []):
        result = result[0]
        return jsonify(result)
    else:
        return jsonify(f"State {cname} Not Found in Database")


@app.route('/country/<int:id>')
def get_state_by_country_id(id):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = f"select * from state where countryid = '{id}';"
    cursor.execute(query1)
    rows = cursor.fetchall()
    statecolnames = [desc[0] for desc in cursor.description]
    result = []
    # for item in rows:
    #     result.append(item[3:-4:-2])

    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[statecolnames[index]] = item
        result.append(columnValue)
    connection.close()

    if (rows != []):
        # result = result[0]
        return jsonify(result)
    else:
        return jsonify(f"States with country id: '{id}' Not Found in Database")


@app.route('/users/state/<int:id>')
def get_users_by_state_id(id):
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )
    cursor = connection.cursor()
    query1 = f"select * from useraddress where stateid = '{id}';"
    cursor.execute(query1)
    rows = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []

    for item1 in rows:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)
    connection.close()
    user_with_state_id_list = []
    users_list = []
    if (rows != []):
        for users in result:
            state_id_user = users["userid"]
            user_with_state_id_list.append(state_id_user)
            res = []
            for i in user_with_state_id_list:
                if i not in res:
                    res.append(i)
        for id in res:
            userdetails = get_user_by_id(id)
            users_list.append(userdetails)
        print(users_list)
        str_list = list(filter(None, users_list))
        return jsonify(str_list)
    else:
        return jsonify("Users Not Found")


app.run(debug=True)
