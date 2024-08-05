// app/contact/api/send-email.js
import { mailOptions, transporter } from '../../../config/nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, message } = req.body;

        const mailContent = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Message de ${firstname} ${lastname}`,
            text: `
        Prénom: ${firstname}
        Nom: ${lastname}
        Email: ${email}
        Téléphone: ${phone}
        Message: ${message}
      `,
        };

        try {
            await transporter.sendMail(mailContent);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
