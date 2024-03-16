from flask import Flask, render_template, request, redirect, url_for, session, flash
from forms import LoginForm
import sqlite3

app = Flask(__name__, static_url_path='/static')
app.secret_key = 'your_secret_key'

#def add_user(email, password):
    #conn = sqlite3.connect('usersdata.db')
    #c = conn.cursor()
    #c.execute("INSERT INTO usersdata (username, password) VALUES (?, ?)", (email, password))
    #conn.commit()
    #saconn.close()

#create_database()
#add_user('nikol.d.peneva.2022@elsys-bg.org', 'Nikol1234')
#add_user('aleksandar.m.dimitrov.2022@elsys-bg.org', 'Aleks1234')


#@app.route('/')
#@app.route('/login', methods=['GET', 'POST'])
#def login():
    #form = LoginForm()
    #if request.method == 'POST':
        #username = request.form['username']
        #password = request.form['password']
    #return render_template('login.html', form=form)

#@app.route('/signuп', methods=['GET', 'POST'])
#def register():
    #if request.method == 'POST':
        #username = request.form['username']
        #password = request.form['password']
        #add_user(username, password)
        #flash('Успешна регистрация!', 'success')
        #return redirect(url_for('login'))
    #return render_template('signup.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/block8")
def block8_floors():
    return render_template("etazhiza8.html")

@app.route("/block8/2")
def block8_1():
    return render_template("block8_2.html")

@app.route("/block8/3")
def block8_3():
    return render_template("block8_3.html")

@app.route("/block8/4")
def block8_4():
    return render_template("block8_4.html")

@app.route("/block9")
def block9_floors():
    return render_template("etazhiza9.html")

@app.route("/block9/1")
def block9_1():
    return render_template("block9_1.html")

@app.route("/block9/2")
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

