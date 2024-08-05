import { transporter, mailOptions } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
    firstname: "First Name",
    lastname: "Last Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
};

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
        ""
    );

    return {
        text: stringData,
        html: `<p>${stringData.replace(/\n/g, "<br>")}</p>`,
    };
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        if (!data || !data.firstname || !data.lastname || !data.email || !data.subject || !data.message) {
            return res.status(400).send({ message: "Bad request" });
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
            });

            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
