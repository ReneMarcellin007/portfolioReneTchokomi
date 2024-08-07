const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

const sendEmail = async (to, subject, text) => {
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'tchokorerene@gmail.com',
                    Name: 'Rene Tchokomi'
                },
                To: [
                    {
                        Email: to,
                        Name: 'Recipient Name'
                    }
                ],
                Subject: subject,
                TextPart: text,
            }
        ]
    });

    return request;
};

module.exports = sendEmail;
