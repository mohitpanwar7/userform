from datetime import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_session import Session 
import datetime


def personal_details():
    app = Flask(__name__)
    

    app.config['SECRET_KEY'] = 'mysecret'
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:admin@localhost:5432/postgres'
    # app.config['SESSION_TYPE'] = 'filesystem'
    # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # app.permanent_session_lifetime = datetime.timedelta(minutes=20)
    # db = SQLAlchemy(app)
    # app.config['SESSION_SQLALCHEMY'] = db
    # sess = Session()
    # sess.init_app(app)
    from personaldetails.users.routes import users
    from personaldetails.forms.routes import forms
    from personaldetails.tasks.routes import tasks
    app.register_blueprint(users)
    app.register_blueprint(forms)
    app.register_blueprint(tasks)
    return app
