'use strict';
const Mail = require('nodemailer');

let transporter = Mail.createTransport({
    host: 'smtp.example.com',  //需要配置
    port: 465,
    secure: true,
    auth: {
        user: 'xxx@example.com',  //需要配置
        pass: 'fvjpdisdfafpsgrsecbi'  //需要配置
    }
});


module.exports = {
    send: (receivers, subject, content) => {
        let mailOptions = {
            from: 'xxx@example.com',  //需要配置
            to: receivers,  //格式: 'address1, address2'
            subject: subject,
            html: content
        };
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return console.err('send email error:',error);
            }
        });
    }
};