from flask import Flask, Blueprint, app, json, jsonify, request
from ..utils import connectionconf
import psycopg2

tasks = Blueprint('tasks',__name__)


@tasks.route('/tasks/create',methods=['POST'])
def create_task():
    if request.method == 'POST':
        request_data = request.get_json()
        title = request_data['title']
        comments = request_data['comments']
        status = request_data['status']
        assignedto = request_data['assignedto']
        print('title==>',title)

    connection = connectionconf()
    cursor = connection.cursor()
    queryfortaskcreate = f"INSERT INTO tasks(title,comments,status,assignedto)VALUES('{title}','{comments}','{status}','{assignedto}');"
    cursor.execute(queryfortaskcreate)
    connection.commit()
    queryforalltasks = "select * from tasks;"
    cursor.execute(queryforalltasks)
    alltasks = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []
    connection.close()
    for item1 in alltasks:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)
        
    return jsonify(result)
        
        