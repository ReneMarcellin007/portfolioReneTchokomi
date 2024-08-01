﻿"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Téléphone",
        description: "(450) 775 8561",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "tchokorerene@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        description: "468 Rue Horner, Granby, Quebec",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert('Email sent successfully');
        } else {
            alert('Error sending email');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Travaillons Ensemble !</h3>
                            <p className="text-white/60">
                                Je suis passionné par la création de solutions innovantes et efficaces. Contactez-moi pour discuter de vos projets et explorer comment nous pouvons collaborer pour atteindre vos objectifs.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Prénom" onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder="Nom" onChange={handleChange} required />
                                <Input type="email" name="email" placeholder="Mail" onChange={handleChange} required />
                                <Input type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choisissez un service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Choisissez un service</SelectLabel>
                                        <SelectItem value="web">Développement Web</SelectItem>
                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                        <SelectItem value="logo">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Écrivez votre message ici."
                                onChange={handleChange}
                                required
                            />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-60">
                                Envoyer le message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
