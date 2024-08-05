import { sendEmail } from "../../config/nodemailer";
import Cors from 'cors';

const cors = Cors({
    methods: ['POST', 'HEAD'],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    if (req.method === 'POST') {
        const { to, subject, text, html } = req.body;

        try {
            await sendEmail({ to, subject, text, html });
            res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
        } catch (error) {
            console.error('Erreur d\'email:', error);
            res.status(500).json({ success: false, error: 'Échec de l\'envoi de l\'email', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ success: false, error: `Méthode ${req.method} non autorisée` });
    }
}