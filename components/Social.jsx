import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ReneMarcellin007/TP5-Etudiant" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rene-marcellin-tchokomi-317770260/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100078218054557" },
    { icon: <FaTwitter />, path: "https://x.com/r_tchokomi" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
