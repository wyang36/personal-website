'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    },
});

exports.sendEmail = functions.database.ref('/Contacts').onWrite((change) => {
    const snapshot = change.after;
    console.log(snapshot);
    const messages = snapshot.val();
    console.log(messages);
    const newMessage = messages[Object.keys(messages)[Object.keys(messages).length - 1]]
    console.log(newMessage);

    const mailOptions = {
        from: '"Firebase." <noreply@firebase.com>',
        to: 'wenqin.z.yang@gmail.com',
    };

    // Building Email message.
    mailOptions.subject = `Message from ${newMessage.name} <${newMessage.email}>`;
    mailOptions.text = newMessage.message;

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log('New email sent'))
        .catch((error) => console.error('There was an error while sending the email:', error));
});