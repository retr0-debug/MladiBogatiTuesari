from flask import Flask, render_template, redirect, url_for
from forms import RegisterForm, LoginForm
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Column, Integer, String, DateTime
#from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, declarative_base

engine = create_engine('sqlite:///users.db', echo=True)
Base = declarative_base()

app = Flask(__name__)
app.app_context().push()
app.config['SECRET_KEY'] = 'password'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(Base):
    __tablename__='users'
    username = db.Column(db.String(20), nullable=False, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(20), nullable=False)

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

#user1 = User(username='nikolp08', email='npeneva08@gmail.com', password='nikolp08')
#user2 = User(username = 'nikolelsys', email='nikol.d.peneva.2022@elsys-bg.org', password = 'nikolelsys08')
user1 = session.query(User).filter_by(email='%elsys-bg.org')
session.commit()
users = session.query(User).all()
for user in users:
    print(user.username, user.email)
session.close()

@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/block8_2")
def block8_1():
    return render_template("block8_2.html")

@app.route("/block8_3")
def block8_3():
    return render_template("block8_3.html")

@app.route("/block8_4")
def block8_4():
    return render_template("block8_4.html")

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

@app.route("/login", methods = ['POST', 'GET'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect(url_for('index'))
    return render_template("login.html", form=form)

@app.route("/register")
def register():
    pass
