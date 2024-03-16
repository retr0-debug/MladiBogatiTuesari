from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3

app = Flask(__name__, static_url_path='/static')
app.secret_key = 'your_secret_key'

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route("/block8")
def block8_floors():
    return render_template("etazhiza8.html")

@app.route("/block8_2")
def block8_1():
    return render_template("block8_2.html")

@app.route("/block8_3")
def block8_3():
    return render_template("block8_3.html")

@app.route("/block8_4")
def block8_4():
    return render_template("block8_4.html")

@app.route("/block9")
def block9_floors():
    return render_template("etazhiza9.html")

@app.route("/block9_1")
def block9_1():
    return render_template("block9_1.html")

@app.route("/block9_2")
def block9_2():
    return render_template("block9.html")

@app.route("/block10")
def block10():
    return render_template("block10.html")

@app.route("/daskalo")
def daskalo():
    return render_template("daskalo.html")

if __name__ == "__main__":
    app.run(debug=True)

@app.route('/login')
def login():
    return render_template('base.html', content='login.html')

@app.route('/signup')
def signup():
    return render_template('base.html', content='signup.html')

@app.route('/unauthorized')
def unauthorized():
    return render_template('base.html', content='unauthorized.html')

#if __name__ == '__main__':
    #app.run(debug=True)

