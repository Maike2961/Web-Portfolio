from flask import Flask, render_template,redirect,request, url_for
from flask_mail import Mail,Message
from dotenv import load_dotenv
import os 

load_dotenv(override=True)

app = Flask(__name__)
app.config.from_object('config')

mail = Mail(app)

@app.route("/", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        print(email)
    
        
        if not name or not email or not message:
            return 
        
        msg = Message(subject="Mensagem do Portfólio", sender=(email), recipients=[os.getenv("MAIL_USERNAME")], 
                body=f'Nome: {name}, \nE-mail: {email}, \nMensagem: \n{message}')
        
        mail.send(msg)
        return redirect(url_for('contact'))
    return render_template('index.html')


        
        