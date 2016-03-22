from flask import *
from application import app

main = Blueprint('main', __name__, template_folder='views')


@main.route('/gifquiz/', methods = ["GET"])
def main_route():

    data = {}

    return render_template("index.html", **data)
