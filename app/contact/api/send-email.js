// pages/api/send-email.js
import { sendEmail } from "../../config/nodemailer";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text, html } = req.body;

        try {
            await sendEmail({ to, subject, text, html });
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
