from flask import Flask, render_template, redirect, url_for, request
from forms import SignUpForm, LoginForm
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Column, Integer, String, DateTime, select
#from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, declarative_base
from flask_login import UserMixin, LoginManager, login_required, login_user, current_user

engine = create_engine('sqlite:///users.db', echo=True)
Base = declarative_base()

app = Flask(__name__)
app.app_context().push()
app.config['SECRET_KEY'] = 'password'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

class User(Base):
    __tablename__='users'
    username = db.Column(db.String(20), nullable=False, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(20), nullable=False)

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
elsys_users = []
user1 = User(username='nikolp08', email='npeneva08@gmail.com', password='nikolp08')
user2 = User(username = 'nikolelsys', email='nikol.d.peneva.2022@elsys-bg.org', password = 'nikolelsys08')
user3 = User(username='alekselsys', email = 'aleksandar.m.dimitrov.2022@elsys-bg.org', password = 'alekselsys08')
#db.session.add(user3)
session.commit()

all_users = session.query(User).all()
elsys_users = []
for user in all_users:
    for year in range(2019, 2024):
        if user.email.endswith(f"{year}@elsys-bg.org"):
            elsys_users.append(user.email)

#print(elsys_users)
session.close()


@app.route('/login', methods=['GET','POST'])
@login_required
def login():
  form = LoginForm(csrf_enabled=False)
  if form.validate_on_submit():
    user = User.query.filter_by(email=form.email.data).first()
    if user and user.check_password(form.password.data):
      login_user(user, remember=form.remember.data)
      next_page = request.args.get('next')
      return redirect(next_page) if next_page else redirect(url_for('index', _external=True, _scheme='https'))
    else:
      return redirect(url_for('login', _external=True, _scheme='https'))
  return render_template('login.html', form=form)

@app.route("/register", methods = ['GET', 'POST'])
def signup():
    form = SignUpForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
    return render_template('signup.html', form=form)

@app.route("/")
@app.route("/home")
@login_required
def index():
    return render_template("index.html")

@app.route("/block8_floors")
@login_required
def block8_floors():
    return render_template("etazhiza8.html")

@app.route("/block8_2")
@login_required
def block8_1():
    return render_template("block8_2.html")

@app.route("/block8_3")
@login_required
def block8_3():
    return render_template("block8_3.html")

@app.route("/block8_4")
@login_required
def block8_4():
    return render_template("block8_4.html")

@app.route("/block9_floors")
@login_required
def block9_floors():
    return render_template("etazhiza9.html")

@app.route("/block9_1")
@login_required
def block9_1():
    return render_template("block9_1.html")

@app.route("/block9_2")
@login_required
def block9_2():
    return render_template("block9.html")

@app.route("/block10")
@login_required
def block10():
    return render_template("block10.html")

@app.route("/daskalo")
@login_required
def daskalo():
    return render_template("daskalo.html")
