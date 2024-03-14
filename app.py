from flask import Flask, render_template

app = (__name__)
app.config["SECRET_KEY"] = "passw"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/block8/<int:floor>")
def block8(floor):
    return render_template("block8.html")

@app.route("/block9/<int:floor>")
def block9(floor):
    return render_template("block9.html")

@app.route("/block10")
def block10():
    return render_template("block10.html")

@app.route("/daskalo")
def daskalo():
    return render_template("daskalo.html")