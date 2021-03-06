import os, smtplib
from flask import render_template
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import List

class MailSmtpException(Exception):
    def __init__(self,message: str):
        super().__init__(message)

class MailSmtp:
    SMTP_SERVER = os.getenv("SMTP_SERVER")
    PORT = os.getenv("SMTP_PORT")
    EMAIL = os.getenv("SMTP_EMAIL")
    PASSWORD = os.getenv("SMTP_PASSWORD")

    @classmethod
    def send_email(self,email: List,subject: str,html: str,**param) -> None:
        if not self.EMAIL: raise MailSmtpException('Email for sender not found')
        if not self.PASSWORD: raise MailSmtpException('Password for email not found')

        msg = MIMEMultipart()
        msg['Subject'] = subject
        msg['From'] = 'dont-reply'
        msg['To'] = ','.join(email)
        html = render_template(html,**param)

        msg.attach(MIMEText(html,'html'))
        # Try to log in to server smtp
        server = smtplib.SMTP(self.SMTP_SERVER,self.PORT)
        try:
            server.login(self.EMAIL,self.PASSWORD)
            server.sendmail(self.EMAIL,email,msg.as_string())
        except smtplib.SMTPException as e:
            raise MailSmtpException(e)
        finally:
            server.quit()
