import os
from flask import Blueprint, Flask, json, jsonify, request, send_from_directory
import psycopg2
from ..utils import connectionconf

forms = Blueprint('forms', __name__)

cwd = os.getcwd()


UPLOAD_DIRECTORY = f"{cwd}/api_uploaded_files"
if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)
cwd = os.getcwd()


@forms.route("/files")
def list_files():
    """Endpoint to list files on the server."""
    files = []
    for filename in os.listdir(UPLOAD_DIRECTORY):
        path = os.path.join(UPLOAD_DIRECTORY, filename)
        filename = filename.split(".")
        filename = filename[0]
        if os.path.isfile(path):
            files.append(filename)
    return jsonify(files)


@forms.route("/files/<int:id>")
def get_file(id):
    image = send_from_directory(
        UPLOAD_DIRECTORY, f"{id}.jpg", as_attachment=True)
    print("image", image)
    return image


@forms.route('/users/create', methods=['POST'])
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
        encPassword = request_data['encPassword']
        addressarray = request_data['addressBoxList']
    connection = connectionconf()
    cursor = connection.cursor()
    queryforuservalidation = f"select * from personaldetails where email = '{email}';"
    cursor.execute(queryforuservalidation)
    recievedinfo = cursor.fetchone()
    if recievedinfo == None:

        query = f"INSERT INTO personaldetails(firstname,lastname, password, mobilenumber, email, gender, dob, maritalstatus) VALUES ('{firstname}','{lastname}', '{encPassword}',{mobilenumber},'{email}','{gender}','{dob}','{maritalstatus}')returning id;"
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

        return jsonify(user_id), 201
    else :
        return jsonify({"message":f"{email} Already Registered","status": 409}), 409

@forms.route('/users/upload/image/<int:id>', methods=['POST'])
def user_image_upload(id):
    if request.method == 'POST':
        file = request.files['file']
        print("image==> ", file)

        file.save(os.path.join(UPLOAD_DIRECTORY, f'{id}'+'.jpg'))

    return jsonify(f"image uploaded of user id {id}"), 201


@forms.route('/state')
def get_all_state_name_and_id():
    connection = connectionconf()
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


@forms.route('/state/<int:id>')
def get_state_name_by_id(id):
    connection = connectionconf()
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


@forms.route('/state/<string:name>')
def get_state_id_by_name(name):
    connection = connectionconf()
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


@forms.route('/country/<int:id>')
def get_state_by_country_id(id):
    connection = connectionconf()
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
