// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, message } = req.body;

        // Configurer le transporteur SMTP
        let transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false, // true pour le port 465, false pour les autres ports
            auth: {
                user: '79a959001@smtp-brevo.com', // remplacez par votre login SMTP Brevo
                pass: 'WVwLbZXsG6pS4Omh', // remplacez par votre mot de passe SMTP Brevo
            },
        });

        // Options de l'email
        let mailOptions = {
            from: '"René-Marcellin" <79a959001@smtp-brevo.com>', // adresse email vérifiée comme expéditeur
            to: 'tchokorerene@gmail.com', // liste des destinataires
            subject: `Message de ${firstname} ${lastname}`,
            text: `
        Prénom: ${firstname}
        Nom: ${lastname}
        Email: ${email}
        Téléphone: ${phone}
        Message: ${message}
      `,
        };

        // Envoyer l'email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
