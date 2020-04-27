const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const config = {
    mailer: {
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: '465',
        user: 'sehyunko0729@gmail.com',
        password: 'gsh1032519'
    },
};

const transporter = nodemailer.createTransport({
    service: config.mailer.service,
    auth: {
        user: config.mailer.user,
        pass: config.mailer.password,
    },
});

exports.contactMail = functions.firestore.document('contact/{id}').onCreate((snap, context) => {
    // console.log(snap.data());
    const name = snap.data().newName;
    const email = snap.data().newEmail;
    const contact = snap.data().newContact;
    const desc = snap.data().newDesc;

    return sendContactMail(name, email, contact, desc);
});

// function 
function sendContactMail(name, email, contact, desc) {
    return transporter.sendMail({
            from: 'girokstn <sehyunko0729@gmail.com>',
            to: 'girokstn@naver.com',
            bcc: 'gsh0729@naver.com',
            subject: '상담 메일이 도착하였습니다.',
            html: `
            <p> 성함: ${name} </p>
            <p> 이메일: ${email} </p>
            <p> 연락처: ${contact} </p>
            <p> 설명: ${desc} </p>
            <p style="margin-top:10px;">from girokstn.com</p>`
        })
        .then(r => console.log('succesfully sent that mail.'))
        .catch(e => e);
}

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});