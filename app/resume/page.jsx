"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDotnet, SiKotlin, SiMysql, SiVuedotjs } from "react-icons/si";

// about data
const about = {
    title: "À propos de moi",
    description:
        "Qui suis-je ?",
    info: [
        {
            fieldName: "Nom",
            fieldValue: "René-Marcellin Tckokomi",
        },
        {
            fieldName: "Phone",
            fieldValue: "(450) 775 8561",
        },
        {
            fieldName: "Experience",
            fieldValue: "1 An",
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Camerounaise",
        },
        {
            fieldName: "Email",
            fieldValue: "tchokorerene@gmail.com",
        },
        {
            fieldName: "Emploi",
            fieldValue: "Disponibilité immédiate",
        },
        {
            fieldName: "Langues",
            fieldValue: "Français, Anglais",
        },
    ],
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Mon expérience",
    description:
        "J&apos;ai acquis une solide expérience dans le développement web et la conception UI/UX, en travaillant sur divers projets qui ont renforcé mes compétences techniques et ma capacité à résoudre des problèmes complexes.",
    items: [
        /*{
          company: "Tech Solutions Inc.",
          position: "Full Stack Developer",
          duration: "2022 - Present",
        },
        {
          company: "Web Design Studio",
          position: "Front-End Developer Intern",
          duration: "Summer 2021",
        },*/
        {
            company: "Personnel",
            position: "Freelance Web Developer Wordpress",
            duration: "Été 2024",
        },
        {
            company: "Cegep de Granby",
            position: "Tuteur",
            duration: "2023 - 2025",
        },
        {
            company: "Personnel",
            position: "Freelance web Shopify, Wix",
            duration: "2022 - 2023",
        },
        {
            company: "Agence Digitale",
            position: "Création logo",
            duration: "2018 - 2019",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Mon éducation",
    description:
        "J&apos;ai acquis une solide expérience à travers de nombreux projets d&apos;école. De la fabrication d&apos;une voiture commandée à distance, à un drone avec Arduino. J&apos;ai développé le code complet de ces projets. À travers la programmation web depuis le début, j&apos;ai pu acquérir des compétences concrètes.",
    items: [
        /*{
          institution: "Online Course Platform",
          degree: "Full Stack Web Development Bootcamp",
          duration: "2023",
        },
        {
          institution: "Codecademy",
          degree: "Front-end Track",
          duration: "2022",
        },
        {
          institution: "Online Course",
          degree: "Programming Course",
          duration: "2020 - 2021",
        },
        {
          institution: "Tech Institute",
          degree: "Certified Web Developer",
          duration: "2019",
        },*/
        {
            institution: "Cegep de Granby",
            degree: "DEC Technique Informatique",
            duration: "2021 - 2025",
        },
        {
            institution: "Institut St-Jean Yaoundé",
            degree: "Ingénieur Informatique (Non complété)",
            duration: "2019 - 2021",
        },
    ],
};

// skills data
const skills = {
    title: "Mes Forces",
    description:
        "Ma capacité à m&apos;adapter et à apprendre rapidement de nouveaux langages et technologies me permet de rester à jour et d&apos;optimiser mes projets.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        // Commented out icons
        /*
        {
          icon: <FaReact />,
          name: "react.js",
        },
        {
          icon: <SiNextdotjs />,
          name: "next.js",
        },
        {
          icon: <SiTailwindcss />,
          name: "tailwind.css",
        },
        {
          icon: <FaNodeJs />,
          name: "node.js",
        },
        {
          icon: <FaFigma />,
          name: "figma",
        },
        */
        // Added new icons
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <SiDotnet />,
            name: "asp.net",
        },
        {
            icon: <SiKotlin />,
            name: "kotlin",
        },
        {
            icon: <SiMysql />,
            name: "mysql",
        },
        {
            icon: <SiVuedotjs />,
            name: "vue.js",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Expérience</TabsTrigger>
                        <TabsTrigger value="education">Éducation</TabsTrigger>
                        <TabsTrigger value="skills">Forces</TabsTrigger>
                        <TabsTrigger value="about">À propos</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[310px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
