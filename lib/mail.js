const mailjet = require('node-mailjet').connect(
    '8511f3f967c03e760711080af1b312ad',  // MJ_APIKEY_PUBLIC
    'dbc170bb3736f2564e1b3d505309df81'   // MJ_APIKEY_PRIVATE
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
