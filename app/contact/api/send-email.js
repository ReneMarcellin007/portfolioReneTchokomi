const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, message } = req.body;

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'your-email@gmail.com',
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
