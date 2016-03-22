from flask import *
#from flask.ext.mail import Mail


app = Flask(__name__, template_folder='views')

#mail = Mail()
#app.config['DEBUG'] = True
#app.config['MAIL_SERVER'] = 'smtp.gmail.com'
#app.config['MAIL_PORT'] = 465
#app.config['MAIL_USE_SSL'] = True
#app.config['MAIL_USERNAME'] = '485Group71@gmail.com'
#app.config['MAIL_PASSWORD'] = 'GradeABeef'
#mail.init_app(app)


import myapp.controllers.main

app.register_blueprint(controllers.main)
