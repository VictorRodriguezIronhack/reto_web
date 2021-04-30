const nodemailer = require('nodemailer');
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const appUrl = 'http://localhost:3000';

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user,
        pass,
    },
});

module.exports.sendValidationEmail = (email, activationToken, name) => {
    transport
        .sendMail({
            to: email,
            from: 'The Phone Cave Team <retowebih@gmail.com>',
            subject: 'The Phone Cave activation account',
            html: `<h1>Hi ${name}</h1> <p>Click on the button below to activate your account ❤️</p> <a href="${appUrl}/activate?token=${activationToken}" style="padding: 10px 20px; color: white; background-color: pink; border-radius: 5px;">Click here</a>`
        });
};