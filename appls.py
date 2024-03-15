from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

users = []


@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
  
    return redirect(url_for('success'))

@app.route('/success')
def success():
    return 'Login successful!'

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form['email']
    password = request.form['password']

    users.append({'email': email, 'password': password})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
