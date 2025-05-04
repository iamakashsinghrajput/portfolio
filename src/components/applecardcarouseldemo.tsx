"use client";
import React from "react";
import { StaticImageData } from "next/image";

import { Carousel, Card } from "@/src/components/ui/apple-cards-carousel";

import Weather from "@/src/assets/weather.png";
import Detective from "@/src/assets/detectivedev.png";
import tictactoe from "@/src/assets/tictactoe.png";
import Primedrive from "@/src/assets/PrimeDrive.png";
import Thyleads from "@/src/assets/Thyleads.png";
import Techscholars from "@/src/assets/Techscholars.png";
import Dribble from "@/src/assets/dribble.png";
import Primedrive2 from "@/src/assets/PrimeDrive2.0.png";

interface ProjectData {
    category: string;
    title: string;
    src: StaticImageData | string;
    contentData: ProjectDetailsProps;
}

interface ProjectDetailsProps {
    titleHighlight: string;
    introduction: string;
    contributions: string[];
    projectUrl: string;
    projectLinkText?: string;
}

const projects: ProjectData[] = [
    {
        category: "Thyleads",
        title: "B2B SAAS Leads Generation.",
        src: Thyleads,
        contentData: {
            titleHighlight: "As a Frontend Developer at Thyleads Pvt. Ltd.",
            introduction: "I played a key role in designing and developing the high-performance landing page and optimizing the lead management interface. My work focused on creating an intuitive, responsive, and visually appealing user experience, ensuring seamless navigation across all devices.",
            contributions: [
                "Developed a dynamic, user-friendly frontend using React.js, Next.js, and Tailwind CSS.",
                "Optimized UI/UX for better lead tracking and management.",
                "Implemented a fully responsive design, ensuring smooth performance on desktops, tablets, and mobile devices.",
                "Improved website speed and SEO through efficient Next.js rendering techniques.",
            ],
            projectUrl: "https://thyleads.com",
            projectLinkText: "Visit Thyleads.com",
        },
    },
    {
        category: "PrimeDrive 2.0",
        title: "Your Premium Ride Showcase",
        src : Primedrive2,
        contentData: {
            titleHighlight: "I developed PrimeDrive 2.0,",
            introduction: "an innovative car showcase platform designed to provide a seamless and visually engaging experience. Built using Next.js, Tailwind CSS, HTML, and MongoDB, this project showcases advanced frontend techniques and backend integration.",
             contributions: [
               "Developed a responsive car showcase platform using Next.js, Tailwind CSS, and TypeScript.",
               "Implemented optimized image rendering and smooth transitions for 360-degree car views, enhancing user experience.",
               "Integrated static image sequences into a seamless visual flow using conditional frame rendering and keyboard navigation.",
               "Launched automated car comparison features using machine learning concepts to recommend vehicles based on user preferences.",
            ],
            projectUrl: "https://prime-drivee.vercel.app",
            projectLinkText: "Explore PrimeDrive 2.0",
        },
    },
     {
        category: "Dribble 2.0",
        title: "Modern Design Platform Clone",
        src: Dribble,
        contentData: {
            titleHighlight: "I created Dribble 2.0,",
            introduction: "a modern redesign and functional clone of Dribbble, crafted to showcase curated design content. Built using Tailwind CSS, Next.js, and MongoDB, this project reflects skills in modern frontend/backend architecture and responsive UI.",
            contributions: [
               "Engineered a clean and intuitive interface using Next.js and Tailwind CSS, mimicking Dribbble with a custom aesthetic.",
               "Developed a dynamic gallery layout for effortless browsing of design inspirations.",
               "Integrated category-based filtering and hover interactions to enhance user engagement.",
               "Deployed with Vercel for optimal performance and seamless hosting.",
            ],
            projectUrl: "https://dribble-2-0.vercel.app",
            projectLinkText: "View Dribble 2.0",
        },
    },
    {
        category: "Detective Dev",
        title: "GitHub Developer Search",
        src: Detective,
        contentData: {
            titleHighlight: "I developed Detective Dev,",
            introduction: "a dynamic web application designed to simplify GitHub developer searches using the GitHub API. This project showcases expertise in React.js, Tailwind CSS, and JavaScript, focusing on performance and user experience.",
            contributions: [
               "Implemented real-time GitHub API integration to fetch and display developer profiles.",
               "Designed an intuitive and responsive UI using React.js and Tailwind CSS.",
               "Optimized search functionality for fast and accurate results.",
               "Ensured cross-device compatibility for responsiveness on all devices.",
            ],
            projectUrl: "https://detectivedev.vercel.app",
            projectLinkText: "Try Detective Dev",
        },
    },
    {
        category: "Weather App",
        title: "Real-Time Weather Updates",
        src: Weather,
        contentData: {
            titleHighlight: "I developed a Weather App,",
            introduction: "that provides real-time weather updates using the OpenWeather API. This project highlights expertise in React.js, Next.js, and Tailwind CSS, focusing on API integration, UI design, and performance.",
            contributions: [
               "Integrated OpenWeather API to fetch live weather data (temperature, humidity, forecasts).",
               "Designed an intuitive and visually appealing UI using React.js and Tailwind CSS.",
               "Implemented responsive design for smooth functionality across all devices.",
               "Optimized performance using Next.js for faster data fetching and improved SEO.",
            ],
            projectUrl: "https://weather-githhub-io.vercel.app/",
            projectLinkText: "Check the Weather App",
        },
    },
    {
        category: "Techscholars",
        title: "EdTech Platform Development",
        src: Techscholars,
        contentData: {
             titleHighlight: "As a Software Developer (Next.js) at Techscholars,",
             introduction: "I designed and developed user-friendly, high-performance web applications using React.js, Next.js, and Tailwind CSS, collaborating with clients to transform requirements into technical implementations.",
             contributions: [
               "Developed and optimized the student dashboard, admin panel, and user authentication system.",
               "Integrated backend APIs to ensure smooth data flow and efficient application performance.",
               "Implemented SSR and CSR using Next.js for better SEO and performance.",
               "Designed responsive UI components with Tailwind CSS and Shadcn.",
               "Ensured cross-device compatibility for a seamless experience.",
            ],
            projectUrl: "https://techscholars.co.in",
            projectLinkText: "Visit Techscholars",
        },
    },
    {
        category: "PrimeDrive",
        title: "Seamless Car Booking",
        src : Primedrive,
        contentData: {
            titleHighlight: "I developed PrimeDrive,",
            introduction: "an innovative car booking platform designed for a seamless rental experience. Built using Next.js, Tailwind CSS, and HTML, this project showcases dynamic, responsive, and user-friendly application development.",
            contributions: [
               "Designed and developed an intuitive UI using Tailwind CSS for a sleek look.",
               "Implemented a location-based car search feature.",
               "Optimized performance and SEO using Next.js SSR.",
               "Ensured cross-device compatibility across desktops, tablets, and mobile devices.",
               "Streamlined the booking process for ease of use.",
            ],
            projectUrl: "https://primedrive-topaz.vercel.app",
            projectLinkText: "View PrimeDrive",
        },
    },
    {
        category: "Tic Tac Toe",
        title: "Classic Web Game",
        src: tictactoe,
        contentData: {
            titleHighlight: "I developed Tic-Tac-Toe,",
            introduction: "a classic multiplayer web game designed for a smooth and engaging user experience. Built using React.js and Tailwind CSS, this project showcases frontend development, game logic, and responsive design.",
            contributions: [
               "Developed an interactive and responsive UI using React.js and Tailwind CSS.",
               "Implemented real-time game logic for turn-based play and win condition checking.",
               "Designed a clean and intuitive interface accessible across all devices.",
               "Optimized performance and state management for smooth gameplay.",
            ],
            projectUrl: "https://tictactoegame-gamma.vercel.app/",
            projectLinkText: "Play Tic-Tac-Toe",
        },
    },
];

// --- Reusable Component for Expanded Card Content ---
const ProjectDetailsContent: React.FC<ProjectDetailsProps> = ({
    titleHighlight,
    introduction,
    contributions,
    projectUrl,
    projectLinkText
}) => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-10 lg:p-14 rounded-3xl">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto space-y-6">

                <p>
                    <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                        {titleHighlight}
                    </span>{" "}
                    {introduction}
                </p>

                <div>
                    <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                        Key Contributions:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
                        {contributions.map((item, index) => (
                            <li key={`contribution-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                     <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                        Project Link:
                    </h3>
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-block"
                    >
                        {projectLinkText || projectUrl}
                    </a>
                </div>
            </div>
        </div>
    );
};


export function AppleCardsCarouselDemo() {
    const cards = projects.map((project, index) => (
        <Card
            key={project.category + index}
            card={{
                category: project.category,
                title: project.title,
                src: project.src,
                content: <ProjectDetailsContent {...project.contentData} />
            }}
            index={index}
        />
    ));

    return (
        <div className="w-full bg-[#000000] py-3 md:py-8">
            <Carousel items={cards} />
        </div>
    );
}