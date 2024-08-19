const Mailjet = require('node-mailjet');

const sendEmail = async (to, subject, text) => {
    const mailjet = Mailjet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC,
        process.env.MJ_APIKEY_PRIVATE
    );

    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
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

    try {
        const result = await request;
        return result;
    } catch (error) {
        console.error("Error sending email:", error.statusCode, error.response.text);  // Log des détails de l'erreur
        throw error;
    }
};

module.exports = sendEmail;
