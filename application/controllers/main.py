from flask import *
from application import app

main = Blueprint('main', __name__, template_folder='views')


@main.route('/gifquiz/', methods = ["GET"])
def main_route():

    data = {
        'img': ['../static/pictures/football_s1.jpg', '../static/pictures/football_s2.jpg', '../static/pictures/football_s3.jpg']
    }

    return render_template("index.html", **data)
