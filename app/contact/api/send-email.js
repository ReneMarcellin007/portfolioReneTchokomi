const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, message } = req.body;

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'tchokorerene@gmail.com',
            subject: `Message from ${firstname} ${lastname}`,
            text: `
                First Name: ${firstname}
                Last Name: ${lastname}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
