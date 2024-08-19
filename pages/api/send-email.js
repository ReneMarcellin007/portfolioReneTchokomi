import sendEmail from '../../lib/mail';

export default async function handler(req, res) {
    try {
        const result = await sendEmail(req.body.to, req.body.subject, req.body.text);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error.message);  // Log seulement le message d'erreur
        res.status(500).json({ success: false, error: error.message });
    }
}
