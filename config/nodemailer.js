import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};

export const sendEmail = async ({ to, subject, text, html }) => {
    const mailOptions = {
        from: email,
        to,
        subject,
        text,
        html
    };

    await transporter.sendMail(mailOptions);
};