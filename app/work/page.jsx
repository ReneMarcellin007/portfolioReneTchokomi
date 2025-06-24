"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { BsArrowUpRight, BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { Autoplay, Navigation } from 'swiper/modules';

const projects = [
    {
        num: "01",
        category: "Stage - Développement Web Junior",
        title: "Stage chez Berry Global",
        description:
            "Développement de plateformes FoodSafety (rapports d'incidents liés à la sécurité alimentaire), ModifyDocument (formulaire pour justification de modification/archivage de documents). Finalisation de l'application console CardReaderConsoleNew (lecture de cartes à puce OMNIKEY 5427 G2 via PCSC-Sharp, lecture UID via APDU, serveur TCP pour transmission à l'app web). Développement de l'application web CardReaderApp en ASP.NET MVC (.NET Framework 4) avec Razor et client TCP pour identification utilisateur.",
        stack: [{ name: "ASP.NET MVC" }, { name: ".NET 4" }, { name: "C#" }, { name: "Razor" }, { name: "TCP" }, { name: "PCSC-Sharp" }],
        image: "/assets/work/stage/1.png",
        gallery: [
            "/assets/work/stage/1.png",
            "/assets/work/stage/2.png",
            "/assets/work/stage/3.png",
            "/assets/work/stage/4.png",
            "/assets/work/stage/5.png"
        ],
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "frontend",
        title: "project 1",
        description:
            "Création de la boutique Shopify de la communauté Ivoirienne pour la fête de l'indépendance",
        stack: [{ name: "Html 5" }, { name: "Css 3" }],
        image: "/assets/work/thumb11.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Société Informatique",
        title: "project 2",
        description:
            "Création du site web d'une compagnie informatique fictive. Dans le but d'améliorer mes capacités",
        stack: [{ name: "WordPress" }, { name: "HTML 5" }],
        image: "/assets/work/thumb12.png",
        live: "https://portfolio-renetchokomi.web.app/",
        github: "https://github.com/ReneMarcellin007/portfolio",
    },
    {
        num: "04",
        category: "Projet d'intégration - Cégep de Granby",
        title: "project 3",
        description: "Projet d'intégration - Cégep de Granby",
        stack: [ { name: "ASP.NET" }, { name: "Vue.js" }, { name: "Bootstrap" }, { name: "SQL" }, { name: "C#" }],
        image: "/assets/work/projet_integration/projetintegration_11.png",
        gallery: [
            "/assets/work/projet_integration/projetintegration_1.png",
            "/assets/work/projet_integration/projetintegration_2.png",
            "/assets/work/projet_integration/projetintegration_3.png",
            "/assets/work/projet_integration/projetintegration_4.png",
            "/assets/work/projet_integration/projetintegration_5.png",
            "/assets/work/projet_integration/projetintegration_6.png",
            "/assets/work/projet_integration/projetintegration_7.png",
            "/assets/work/projet_integration/projetintegration_8.png",
            "/assets/work/projet_integration/projetintegration_9.png",
            "/assets/work/projet_integration/projetintegration_10.png",
            "/assets/work/projet_integration/projetintegration_11.png"
        ],
        live: "https://sqlinfo.cegepgranby.qc.ca/2135621/",
        github: "https://github.com/ReneMarcellin007/ProjetIntegration.git",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Fonction pour changer de projet avec les boutons verts
    const changeProject = (direction) => {
        const currentIndex = projects.findIndex(p => p.num === project.num);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex + 1 >= projects.length ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex - 1 < 0 ? projects.length - 1 : currentIndex - 1;
        }
        
        setProject(projects[newIndex]);
        setCurrentImageIndex(0);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        {project.gallery ? (
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12"
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                {project.gallery.map((image, index) => (
                                    <SwiperSlide key={index} className="w-full cursor-pointer">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={image}
                                                    fill
                                                    className="object-cover"
                                                    alt={`Vue ${index + 1} du projet`}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        fill
                                        className="object-cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Boutons de navigation entre projets */}
                        <div className="flex gap-2 justify-end mt-4">
                            <button 
                                onClick={() => changeProject('prev')}
                                className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            >
                                <BsArrowLeft />
                            </button>
                            <button 
                                onClick={() => changeProject('next')}
                                className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            >
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
