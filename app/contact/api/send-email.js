// app/contact/api/send-email.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, phone, message } = req.body;

        const msg = {
            to: 'tchokorerene@gmail.com',
            from: 'tchokomirenemarcellin@gmail.com', // Utilisez l'adresse email vérifiée dans SendGrid
            replyTo: email, // Utilisez l'email de l'utilisateur comme replyTo
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
            await sendgrid.send(msg);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
