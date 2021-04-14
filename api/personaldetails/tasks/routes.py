from flask import Flask, Blueprint, app, json, jsonify, request
from ..utils import connectionconf
import psycopg2

tasks = Blueprint('tasks', __name__)


@tasks.route('/tasks/create', methods=['POST'])
def create_task():
    if request.method == 'POST':
        request_data = request.get_json()
        title = request_data['title']
        comments = request_data['comments']
        statusid = request_data['selectedstatusid']
        assignedtoid = request_data['assignedtoid']
        taskassigndate = request_data['taskassigndate']
        taskdeadline = request_data['taskdeadline']
        print('title==>', title)

    connection = connectionconf()
    cursor = connection.cursor()
    if taskdeadline != None:
        queryfortaskcreate = f"INSERT INTO tasks(title,comments,statusid,assignedtoid,taskassigndate,taskdeadline)VALUES('{title}','{comments}',{statusid},{assignedtoid},'{taskassigndate}','{taskdeadline}');"
    else:
        queryfortaskcreate = f"INSERT INTO tasks(title,comments,statusid,assignedtoid,taskassigndate)VALUES('{title}','{comments}',{statusid},{assignedtoid},'{taskassigndate}');"
    cursor.execute(queryfortaskcreate)
    connection.commit()
    connection.close()
    result = fetch_all_status_along_with_their_tasks()
    # queryforalltasks = "select * from tasks;"
    # cursor.execute(queryforalltasks)
    # alltasks = cursor.fetchall()
    # colnames = [desc[0] for desc in cursor.description]
    # result = []
    # connection.close()
    # for item1 in alltasks:
    #     columnValue = {}
    #     for index, item in enumerate(item1):
    #         columnValue[colnames[index]] = item
    #     result.append(columnValue)

    return result


@tasks.route('/tasks/edit', methods=['POST'])
def edit_task():
    if request.method == 'POST':
        request_data = request.get_json()

        id = request_data['id']
        title = request_data['title']
        comments = request_data['comments']
        statusid = request_data['statusid']
        assignedtoid = request_data['assignedtoid']
        taskassigndate = request_data['taskassigndate']
        taskdeadline = request_data['taskdeadline']
        print('title==>', title)

    connection = connectionconf()
    cursor = connection.cursor()
    if taskdeadline != None:
        queryfortaskupdate = f"UPDATE tasks SET title = '{title}',comments = '{comments}',statusid = '{statusid}' ,assignedtoid = '{assignedtoid}',taskassigndate = '{taskassigndate}',taskdeadline = '{taskdeadline}' where id = {id};"
    else:
        queryfortaskupdate = f"UPDATE tasks SET title = '{title}',comments = '{comments}',statusid = '{statusid}' ,assignedtoid = '{assignedtoid}',taskassigndate = '{taskassigndate}' where id = {id};"
    cursor.execute(queryfortaskupdate)
    connection.commit()
    connection.close()
    result = fetch_all_status_along_with_their_tasks()

    return result


@tasks.route('/tasks', methods=['GET', 'POST'])
def fetch_all_tasks():
    connection = connectionconf()
    cursor = connection.cursor()
    # queryforallusers = "select * from personaldetails;"
    # cursor.execute(queryforallusers)
    # allusers = cursor.fetchall()
    queryforalltasks = "SELECT tasks.id id, tasks.title title,tasks.comments,tasks.statusid statusid,tasks.assignedtoid assignedtoid,personaldetails.firstname firstname,personaldetails.lastname lastname from tasks inner join personaldetails on tasks.assignedtoid = personaldetails.id;"
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


@tasks.route('/tasks/delete/<int:id>', methods=['POST'])
def delete_task(id):
    connection = connectionconf()
    cursor = connection.cursor()
    queryfortaskdelete = f"DELETE FROM tasks where id = {id} "
    cursor.execute(queryfortaskdelete)
    connection.commit()
    connection.close()
    result = fetch_all_status_along_with_their_tasks()
    # queryforalltasks = "select * from tasks;"
    # cursor.execute(queryforalltasks)
    # alltasks = cursor.fetchall()
    # colnames = [desc[0] for desc in cursor.description]
    # result = []

    # for item1 in alltasks:
    #     columnValue = {}
    #     for index, item in enumerate(item1):
    #         columnValue[colnames[index]] = item
    #     result.append(columnValue)

    return result


@tasks.route('/tasks/status/create', methods=['POST'])
def create_task_status():
    if request.method == 'POST':
        request_data = request.get_json()
        statusname = request_data['statusname']
        statussequence = request_data['statussequence']
    connection = connectionconf()
    cursor = connection.cursor()
    queryforstatuscreate = f"INSERT INTO status(statusname, statussequence )VALUES('{statusname}',{statussequence});"
    cursor.execute(queryforstatuscreate)
    connection.commit()
    connection.close()
    result = fetch_all_status_along_with_their_tasks()
    # queryforallstatus = "select * from status order by statussequence ;"
    # cursor.execute(queryforallstatus)
    # allstatus = cursor.fetchall()
    # colnames = [desc[0] for desc in cursor.description]
    # result = []
    # connection.close()
    # for item1 in allstatus:
    #     columnValue = {}
    #     for index, item in enumerate(item1):
    #         columnValue[colnames[index]] = item
    #     result.append(columnValue)

    return result


@tasks.route('/tasks/status/delete/<int:id>', methods=['POST'])
def delete_status(id):
    connection = connectionconf()
    cursor = connection.cursor()

    queryforstatus = f"select * from status where id = {id};"
    cursor.execute(queryforstatus)
    status = cursor.fetchone()
    statusid = status[0]
    print("status==>", statusid)
    queryfortaskdelete = f"DELETE FROM tasks where statusid = {statusid} "
    cursor.execute(queryfortaskdelete)
    connection.commit()
    queryforstatusdelete = f"DELETE FROM status WHERE id = {id};"
    cursor.execute(queryforstatusdelete)
    connection.commit()
    connection.close()
    result = fetch_all_status_along_with_their_tasks()
    # queryforallstatus = "select * from status order by statussequence ;"
    # cursor.execute(queryforallstatus)
    # allstatus = cursor.fetchall()
    # colnames = [desc[0] for desc in cursor.description]
    # result = []
    # connection.close()
    # for item1 in allstatus:
    #     columnValue = {}
    #     for index, item in enumerate(item1):
    #         columnValue[colnames[index]] = item
    #     result.append(columnValue)

    return result

# @tasks.route('/tasks/status/all',methods=['POST','GET'])
# def fetch_all_status():

#     connection = connectionconf()
#     cursor = connection.cursor()
#     queryforallstatus = "select * from status order by statussequence ;"
#     cursor.execute(queryforallstatus)
#     allstatus = cursor.fetchall()
#     colnames = [desc[0] for desc in cursor.description]
#     result = []
#     connection.close()
#     for item1 in allstatus:
#         columnValue = {}
#         for index, item in enumerate(item1):
#             columnValue[colnames[index]] = item
#         result.append(columnValue)

#     return jsonify(result)


@tasks.route('/tasks/status/<int:id>', methods=['POST', 'GET'])
def fetch_tasks_by_status_id(id):

    connection = connectionconf()
    cursor = connection.cursor()
    queryforallstatus = f"select * from tasks where statusid = {id} ;"

    cursor.execute(queryforallstatus)
    allstatus = cursor.fetchall()
    colnames = [desc[0] for desc in cursor.description]
    result = []
    connection.close()
    for item1 in allstatus:
        columnValue = {}
        for index, item in enumerate(item1):
            columnValue[colnames[index]] = item
        result.append(columnValue)

    return jsonify(result)


@tasks.route('/status/tasks/all', methods=['GET', 'POST'])
def fetch_all_status_along_with_their_tasks():
    connection = connectionconf()
    cursor = connection.cursor()
    queryforallstatus = "select * from status order by statussequence;"
    cursor.execute(queryforallstatus)
    allstatus = cursor.fetchall()
    colnameforstatus = [desc[0] for desc in cursor.description]
    print(allstatus)
    statusdatalist = []

    for status in allstatus:
        statusid = status[0]
        print("statusid==>", statusid)
        queryforalltasks = f"SELECT tasks.id id, tasks.title title,tasks.comments,tasks.statusid statusid,tasks.assignedtoid assignedtoid,tasks.taskassigndate taskassigndate,tasks.taskdeadline taskdeadline,personaldetails.firstname firstname,personaldetails.lastname lastname from tasks inner join personaldetails on tasks.assignedtoid = personaldetails.id where tasks.statusid = {statusid};"
        cursor.execute(queryforalltasks)
        alltasks = cursor.fetchall()
        colnamesfortasks = [desc[0] for desc in cursor.description]
        alltaskslist = []
        print("alltasks", alltasks)
        if alltasks != []:
            for task in alltasks:
                columnValuetask = {}
                for taskindex, taskitem in enumerate(task):
                    columnValuetask[colnamesfortasks[taskindex]] = taskitem
                    print("columnValuetask===>", columnValuetask)
                alltaskslist.append(columnValuetask)
        columnValuestatus = {}
        for statusindex, statusitem in enumerate(status):
            columnValuestatus[colnameforstatus[statusindex]] = statusitem
            print("columnValuestatus===>", columnValuestatus)
            columnValuestatus["alltasks"] = alltaskslist
            columnValuestatus["taskcount"] = len(alltaskslist)

        statusdatalist.append(columnValuestatus)

    return jsonify(statusdatalist)


@tasks.route('/status/tasks/between', methods=['GET', 'POST'])
def fetch_status_along_with_their_tasks_for_timestamp():
    if request.method == 'POST':
        request_data = request.get_json()
        startdate = request_data['startDate']
        enddate = request_data['endDate']
    connection = connectionconf()
    cursor = connection.cursor()
    queryforallstatus = "select * from status order by statussequence;"
    cursor.execute(queryforallstatus)
    allstatus = cursor.fetchall()
    colnameforstatus = [desc[0] for desc in cursor.description]
    print(allstatus)
    statusdatalist = []

    for status in allstatus:
        statusid = status[0]
        print("statusid==>", statusid)
        queryforselectedtasks = f"SELECT tasks.id id, tasks.title title,tasks.comments,tasks.statusid statusid,tasks.assignedtoid assignedtoid,tasks.taskassigndate taskassigndate,tasks.taskdeadline taskdeadline,personaldetails.firstname firstname,personaldetails.lastname lastname from tasks inner join personaldetails on tasks.assignedtoid = personaldetails.id where tasks.statusid = {statusid} AND tasks.taskassigndate BETWEEN '{startdate}' AND '{enddate}';"
        cursor.execute(queryforselectedtasks)
        alltasks = cursor.fetchall()
        colnamesfortasks = [desc[0] for desc in cursor.description]
        alltaskslist = []
        print("alltasks", alltasks)
        if alltasks != []:
            for task in alltasks:
                columnValuetask = {}
                for taskindex, taskitem in enumerate(task):
                    columnValuetask[colnamesfortasks[taskindex]] = taskitem
                    print("columnValuetask===>", columnValuetask)
                alltaskslist.append(columnValuetask)
        columnValuestatus = {}
        for statusindex, statusitem in enumerate(status):
            columnValuestatus[colnameforstatus[statusindex]] = statusitem
            print("columnValuestatus===>", columnValuestatus)
            columnValuestatus["alltasks"] = alltaskslist
            columnValuestatus["taskcount"] = len(alltaskslist)

        statusdatalist.append(columnValuestatus)

    return jsonify(statusdatalist)


@tasks.route('/status/tasks/mytimeline', methods=['GET', 'POST'])
def fetch_tasks_for_mytimeline():
    if request.method == 'POST':
        request_data = request.get_json()
        id = request_data['id']
    connection = connectionconf()
    cursor = connection.cursor()
    queryforallstatus = "select * from tasks;"
    cursor.execute(queryforallstatus)
    alltasks = cursor.fetchall()
    # colnamesfortasks = [desc[0] for desc in cursor.description]
    # print(colnamesfortasks)

    if alltasks != None:

        query_for_yesterday_tasks_with_condtions = f"SELECT tasks.id, tasks.title,tasks.comments, tasks.statusid, tasks.assignedtoid, tasks.taskassigndate, tasks.taskdeadline,status.statusname statusname from tasks inner join status on tasks.statusid = status.id AND status.id in (41,50) AND assignedtoid = {id} AND taskassigndate = current_date - INTEGER '1';"
        cursor.execute(query_for_yesterday_tasks_with_condtions)
        yesterday_tasks = cursor.fetchall()
        colnamesfortasks = [desc[0] for desc in cursor.description]
        yesterday_tasks_list = []
        if yesterday_tasks != None:
            for task in yesterday_tasks:
                columnValuetask = {}
                for taskindex, taskitem in enumerate(task):
                    columnValuetask[colnamesfortasks[taskindex]] = taskitem
                yesterday_tasks_list.append(columnValuetask)

        query_for_today_tasks = f"SELECT tasks.id, tasks.title,tasks.comments, tasks.statusid, tasks.assignedtoid, tasks.taskassigndate, tasks.taskdeadline,status.statusname statusname from tasks inner join status on tasks.statusid = status.id where assignedtoid = {id} AND taskassigndate = current_date;"
        cursor.execute(query_for_today_tasks)
        today_tasks = cursor.fetchall()
        colnamesfortasks = [desc[0] for desc in cursor.description]
        today_tasks_list = []
        if today_tasks != None:
            for task in today_tasks:
                columnValuetask = {}
                for taskindex, taskitem in enumerate(task):
                    columnValuetask[colnamesfortasks[taskindex]] = taskitem
                today_tasks_list.append(columnValuetask)

        query_for_tommorrow_tasks = f"SELECT tasks.id, tasks.title,tasks.comments, tasks.statusid, tasks.assignedtoid, tasks.taskassigndate, tasks.taskdeadline,status.statusname statusname from tasks inner join status on tasks.statusid = status.id where assignedtoid = {id} AND taskassigndate = current_date + INTEGER '1';"
        cursor.execute(query_for_tommorrow_tasks)
        tommorrow_tasks = cursor.fetchall()
        colnamesfortasks = [desc[0] for desc in cursor.description]
        tommorrow_tasks_list = []
        if tommorrow_tasks != None:
            for task in tommorrow_tasks:
                columnValuetask = {}
                for taskindex, taskitem in enumerate(task):
                    columnValuetask[colnamesfortasks[taskindex]] = taskitem
                tommorrow_tasks_list.append(columnValuetask)
        
        usertasks = {}
        
        usertasks['colnamesfortasks'] = colnamesfortasks
        if yesterday_tasks_list != []:
            usertasks['yesterdaytasks'] = yesterday_tasks_list
        
        if today_tasks_list != []:
            usertasks['todaytasks'] = today_tasks_list
        
        if tommorrow_tasks_list != []:
            usertasks['tommorrowtasks'] = tommorrow_tasks_list
        
        return jsonify(usertasks),201

    else :
        return jsonify({"message":f"tasks for user with id :{id} Not Found","status": 404}),404