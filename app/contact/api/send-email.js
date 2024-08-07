import sendEmail from '../../lib/mail';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        try {
            const result = await sendEmail(to, subject, text);
            res.status(200).json({ status: 'success', result });
        } catch (error) {
            res.status(500).json({ status: 'error', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
