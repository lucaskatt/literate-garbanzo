from flask import *
from myapp import app

main = Blueprint('main', __name__, template_folder='views')


@main.route('/hannahgoodell/', methods = ["GET"])
def main_route():

    data = {}

    return render_template("index.html", **data)
