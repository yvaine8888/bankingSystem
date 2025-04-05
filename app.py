from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/create_account', methods=['GET'])
def signUp():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
