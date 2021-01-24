#Documentation:
#Chart.js documentation: https://www.chartjs.org/docs/latest/

from flask import Flask, render_template, request, jsonify
import requests
from flask_wtf import FlaskForm
from flask_bootstrap import Bootstrap
import urllib.request, json
from datetime import datetime


import graphing


app = Flask(__name__)
app.secret_key = "super secret"
bootstrap = Bootstrap(app)


class RecvDataStub:
    def __init__(self):
        self.days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
        self.weeks = ["A", "B", "C"]
        print("initialising server connection")

    def libraryAbout(self):
        return [
            {"name": "Senior Library", "hours": "9am - 3pm", "current": 20,
             "capacity": 50, "minExpected": 20, "maxExpected": 30},
            {"name": "Junior Library", "hours": "9am - 3pm", "current": 10,
             "capacity": 30, "minExpected": 10, "maxExpected": 25}
        ]

    def stats(self, libraryName, minDay, maxDay, minWeek, maxWeek):
        assert libraryName in ["Senior library", "Junior library"], "Invalid LibName"
        assert minDay in self.days, "Invalid Day"
        assert maxDay in self.days, "Invalid Day"
        assert self.days.index(minDay) <= self.days.index(maxDay), "minDay larger than maxDay"
        assert minWeek in self.weeks, "Invalid Week"
        assert maxWeek in self.weeks, "Invalid Week"
        assert self.weeks.index(minWeek) <= self.weeks.index(maxWeek), "minWeek larger than maxWeek"
        return [
            "(minutes past 12 midnight (int), amount (int))"
        ]
        # raise NotImplemented

database = RecvDataStub()


@app.route('/')
def home():
    hard_code = database.libraryAbout()
    return render_template("home.html", data=hard_code)


@app.route("/trends")
def trends():
    allData = pastData()
    # allData = json.load(pastData())
    print(type(allData))
    print("data:", allData)
    # might not need below "selected" part
    day = "Mon"
    wk = "A"
    selected = f"{day}{wk}"
    # script, div = graphing.trends(selected, allData[selected])
    return render_template("trends.html", data=allData, Selected=selected)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html")



def pastData():
    #pass as a json
    # return '{"MonA": [("9:15am", 5), ("9:30am", 7), ("9:45am", 10), ("10:00am", 8)]}'
    return {"": {"9:15am": 0, "9:30am": 0, "9:45am": 0, "10:00am": 0},
            "Mon": {"9:15am": 5, "9:30am": 7, "9:45am": 10, "10:00am": 8},
            "Tues": {"9:15am": 3, "9:30am": 2, "9:45am": 6, "10:00am": 7},
            "Wed": {"9:15am": 1, "9:30am": 8, "9:45am": 12, "10:00am": 6},
            "Thurs": {"9:15am": 2, "9:30am": 5, "9:45am": 9, "10:00am": 9},
            "Fri": {"9:15am": 7, "9:30am": 15, "9:45am": 9, "10:00am": 7},
            "All": {"9:15am": 12, "9:30am": 7, "9:45am": 3, "10:00am": 8}}


@app.route("/<lib>Count")
def count(lib):
    return "1291"


if __name__ == '__main__':
    app.run()
