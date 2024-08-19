import sendEmail from '../../lib/mail';

export default async function handler(req, res) {
    console.log("Handler reached"); // Log de d�bogage

    if (req.method === 'POST') {
        const { to, subject, text } = req.body;
        console.log("Request body:", req.body); // Log de d�bogage

        try {
            const result = await sendEmail(to, subject, text);
            console.log("Email sent:", result); // Log de d�bogage
            res.status(200).json({ status: 'success', result });
        } catch (error) {
            console.error("Error sending email:", error); // Log de d�bogage
            res.status(500).json({ status: 'error', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
