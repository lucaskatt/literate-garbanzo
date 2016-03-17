##Deploy:
###example gunicorn command:
- gunicorn -b eecs485-08.eecs.umich.edu:5871 -b eecs485-08.eecs.umich.edu:5971 -D application:app

###To run with debugging:
- python runserver.py

##Sources:
- flask-mysql: http://flask-mysqldb.readthedocs.org/en/latest/
- File organization to make app global: http://flask.pocoo.org/docs/0.10/patterns/packages/
