from flask import Flask, render_template, request
import os
import mysql.connector
connection = mysql.connector.connect(user = "root", database = "example", 
password = "x1321PF@33")
cursor = connection.cursor()
testQuery = ('SELECT * FROM the_users WHERE FirstName="Sarah"')
cursor.execute(testQuery)
for item in cursor:
    print(item)
cursor.close()
connection.close()

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
