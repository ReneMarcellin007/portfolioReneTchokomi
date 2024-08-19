import sendEmail from '../../lib/mail';

export default async function handler(req, res) {
    console.log("Handler reached"); // Log de débogage

    if (req.method === 'POST') {
        const { to, subject, text } = req.body;
        console.log("Request body:", req.body); // Log de débogage

        try {
            const result = await sendEmail(to, subject, text);
            console.log("Email sent:", result); // Log de débogage
            res.status(200).json({ status: 'success', result });
        } catch (error) {
            console.error("Error sending email:", error); // Log de débogage
            res.status(500).json({ status: 'error', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
