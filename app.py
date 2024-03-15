from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html', content='index.html')

@app.route('/login')
def login():
    return render_template('base.html', content='login.html')

@app.route('/signup')
def signup():
    return render_template('base.html', content='signup.html')

@app.route('/unauthorized')
def unauthorized():
    return render_template('base.html', content='unauthorized.html')

if __name__ == '__main__':
    app.run(debug=True)
