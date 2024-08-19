import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Portfolio René Tchokomi",
    description: "Bienvenue sur mon portfolio fait avec Next.js ",
    keywords: ["Next.js", "React", "Transition", "SEO"],
    openGraph: {
        title: "Portfolio René Tchokomi",
        description: "Apprenez en plus sur moi et mes projets.",
        url: "https://renetchokomi.com",
        siteName: "Portfolio René Tchokomi",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="UTF-8" />
            </head>
            <body className={jetbrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
