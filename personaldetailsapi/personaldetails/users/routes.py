import os
from flask import Flask, Blueprint, json, jsonify, request, session
from ..utils import connectionconf
import psycopg2
from flask_sqlalchemy import SQLAlchemy 
from flask_session import Session 
from ..__init__ import personal_details


users = Blueprint('users',__name__)


@users.route('/signup', methods=['POST'])
def create_userlogin_by_post_request():
    if request.method == 'POST':
        request_data = request.get_json()
        print
        displayname = request_data['displayName']
        email = request_data['email']
        password = request_data['password']

    print("displayname", displayname)
    print("email", email)
    print("password", password)

    connection = connectionconf()
    cursor = connection.cursor()
    query_user_verify = f"select * from userauth where email = '{email}'"
    cursor.execute(query_user_verify)
    rows = cursor.fetchall()
    print(rows)
    if (rows == []):

        query = f"INSERT INTO userauth(displayname,email,password) VALUES ('{displayname}','{email}','{password}')returning uid;"
        cursor.execute(query)
        last_id = cursor.fetchone()
        user_id = last_id[0]

        connection.commit()
        count = cursor.rowcount
        print(count, "Record inserted successfully into table")

        connection.close()
        return jsonify(user_id), 200
    else:
        connection.close()
        print(f"{email} Already Registered")
        return jsonify(f"{email} Already Registered"), 409


@users.route('/signin', methods=['POST'])
def login_user_by_get_request():
    

    
    
    
    if request.method == 'POST':
        request_data = request.get_json()
        email = request_data['email']
        password = request_data['password']


    print("email", email)
    print("password", password)

    connection = connectionconf()
    cursor = connection.cursor()
    query = f"select * from userauth where email = '{email}'"
    cursor.execute(query)
    user = cursor.fetchone()
    colnames = [desc[0] for desc in cursor.description]
    # user_id = user[0]
    
   
    # db.create_all()
    
    if user:
        if (user[3] == password):
            columnValue = {}
            for index, item in enumerate(user):
                if (index != 3):
                    columnValue[colnames[index]] = item
            columnValue["status"] = 201
            session.permanent = False
            # app.permanent_session_lifetime = datetime.timedelta(minutes=20)
            session.modified = True
            session['value'] = columnValue["uid"]
            data = session.get("value")
            queryforsession = "SELECT * FROM sessions WHERE id = ( SELECT MAX(id) FROM sessions ) ;"
            cursor.execute(queryforsession)
            lastsession = cursor.fetchone()
            columnValue["sessionid"] = lastsession[1]
            print(columnValue["uid"])
            connection.close()
            return jsonify(columnValue)
        else:
            data = {
                "message": "Email or Password Incorrect",
                "status": 401
            }
            return jsonify(data)
    else:
        data = {
            "message": "User Not Found",
            "status": 404
        }
        return jsonify(data)

def get_user_by_id(id):
    connection = connectionconf()
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
        result["addresslist"] = addresslist
        return result
    else:
        result = ["Not Found"]
    connection.close()



@users.route('/users/state/<int:id>')
def get_users_by_state_id(id):
    connection = connectionconf()
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

@users.route('/users')
def get_all_users_with_address():
    connection = connectionconf()
    cursor = connection.cursor()
    query1 = "select * from personaldetails;"
    cursor.execute(query1)
    rows = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []
    usersid = []
    for item1 in rows:
        columnValue = {}
        usersid.append(item1[0])
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)

    idquerydata = []
    i = 0
    for id in usersid:
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
        idquerydata.append(addresslist)
        newr = []

    j = 0
    for r in result:
        r["addresslist"] = idquerydata[j]
        newr.append(r)
        j += 1

    connection.close()

    return jsonify(newr)


@users.route('/users/<int:id>')
def get_user_json_by_id(id):
    connection = connectionconf()
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
        result["addresslist"] = addresslist
        return jsonify(result)
    else:
        result = ["Not Found"]
    connection.close()

@users.route('/users/delete/<int:id>')
def delete_user_by_id(id):
    connection = connectionconf()
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

    return result

@users.route('/get')
def get_session():
    data = session.get("value")
    return f'The value in the session is: { data }'

@users.route('/set/<string:value>')
def set_session(value):
    session['value'] = value 
    return f'The value you set is: { value }'



