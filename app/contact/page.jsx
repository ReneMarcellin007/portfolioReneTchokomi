"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    { icon: <FaPhoneAlt />, title: "Téléphone", description: "(450) 775 8561" },
    { icon: <FaEnvelope />, title: "Email", description: "tchokorerene@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Adresse", description: "468 Rue Horner, Granby, Quebec" },
];

const ContactForm = () => {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: 'tchokorerene@gmail.com',
                subject: formData.subject,
                text: `First Name: ${formData.firstname}\nLast Name: ${formData.lastname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
                html: `<p>First Name: ${formData.firstname}</p><p>Last Name: ${formData.lastname}</p><p>Email: ${formData.email}</p><p>Phone: ${formData.phone}</p><p>Message: ${formData.message}</p>`
            }),
        });

        const result = await response.json();

        if (result.success) {
            alert('Message envoyé avec succès');
        } else {
            alert('Échec de l\'envoi du message');
        }
    };


    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Travaillons Ensemble !</h3>
                            <p className="text-white/60">
                                Je suis passionné par la création de solutions innovantes et efficaces. Contactez-moi pour discuter de vos projets et explorer comment nous pouvons collaborer pour atteindre vos objectifs.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Prénom" onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder="Nom" onChange={handleChange} required />
                                <Input type="email" name="email" placeholder="Mail" onChange={handleChange} required />
                                <Input type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
                                <Input type="text" name="subject" placeholder="Sujet" onChange={handleChange} required />
                            </div>
                            <Textarea className="h-[200px]" name="message" placeholder="Écrivez votre message ici." onChange={handleChange} required />
                            <Button type="submit" size="md" className="max-w-60">Envoyer le message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactForm;
