"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { Carousel, Card } from "@/src/components/ui/apple-cards-carousel";

// Existing Asset Imports
import WeatherAsset from "@/src/assets/weather.png"; // Renamed to avoid conflict with Weather component name
import Detective from "@/src/assets/detectivedev.png";
import tictactoe from "@/src/assets/tictactoe.png";
import ThyleadsAsset from "@/src/assets/Thyleads.png"; // Renamed
import TechscholarsAsset from "@/src/assets/techscholarshero.png"; // Renamed
import DribbleAsset from "@/src/assets/dribble.png"; // Renamed
import Primedrive2Asset from "@/src/assets/PrimeDrive2.0.png"; // Renamed

import ThyleadsHome from "@/src/assets/ThyleadsHome.png";
import ThyleadsLead from "@/src/assets/Thyleadslead.png";

import LoginPage from "@/src/assets/loginpage.png";
import HomeScreen from "@/src/assets/HomePage.png";
import CarShow from "@/src/assets/Carshow.png";
import PaymentPage from "@/src/assets/Paymentpage.png";

import DribbleLogin from "@/src/assets/dribbleLogin.png";
import DribbleHome from "@/src/assets/dribbleHome.png";
import DribbleProfile from "@/src/assets/dribbleProfile.png";

import Detectivedev from "@/src/assets/detectivedevhomepage.png";
import DetectivedevUI from "@/src/assets/detectivedevUI.png";
import DetectivedevLight from "@/src/assets/detectivedevlight.png";

import TechscholarsHome from "@/src/assets/techscholarshome.png";
import TechscholarsContact from "@/src/assets/techscholarscontact.png";
import TechscholarsServices from "@/src/assets/techscholarsservices.png";
import TechscholarsWork from "@/src/assets/techscholarswork.png";

import WeatherappHome from "@/src/assets/WeatherappHome.png";
import Weatherappsearch from "@/src/assets/Weathersearch.png";

import TictactoeHome from "@/src/assets/TictactoeHomepage.png";
import TictactoeGame from "@/src/assets/Tictaktoegameexp.png";

// --- Interface Definitions ---
interface ProjectDetailsCoreProps {
  titleHighlight: string;
  introduction: string;
  contributions: string[];
  projectUrl: string;
  projectLinkText?: string;
}

interface PrimeDriveFeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

// Extended content data to include features for all projects
interface ProjectFeatureShowcaseData extends ProjectDetailsCoreProps {
  features: PrimeDriveFeatureItem[];
}

interface ProjectData {
  category: string;
  title: string;
  src: StaticImageData | string;
  contentData: ProjectFeatureShowcaseData; // Updated to use the new interface
}


// --- Placeholder Images for Project Features ---
// IMPORTANT: Replace these with actual paths to your feature images for each project

// Thyleads Feature Placeholders
const ThyleadsFeature1Placeholder = ThyleadsHome; // Placeholder
const ThyleadsFeature2Placeholder = ThyleadsLead; // Placeholder

// Dribble 2.0 Feature Placeholders
const DribbleFeature1Placeholder = DribbleLogin;
const DribbleFeature2Placeholder = DribbleHome;
const DribbleFeature3Placeholder = DribbleProfile; // Placeholder

// Detective Dev Feature Placeholders
const DetectiveDevFeature1Placeholder = Detectivedev;
const DetectiveDevFeature2Placeholder = DetectivedevUI;
const DetectiveDevFeature3Placeholder = DetectivedevLight;

// Weather App Feature Placeholders
const WeatherAppFeature1Placeholder = WeatherappHome;
const WeatherAppFeature2Placeholder = Weatherappsearch;

// Techscholars Feature Placeholders
const TechscholarsFeature1Placeholder = TechscholarsHome;
const TechscholarsFeature2Placeholder = TechscholarsContact;
const TechscholarsFeature3Placeholder = TechscholarsServices;
const TechscholarsFeature4Placeholder = TechscholarsWork;

// Tic Tac Toe Feature Placeholders
const TicTacToeFeature1Placeholder = TictactoeHome;
const TicTacToeFeature2Placeholder = TictactoeGame; // Reusing, ideally distinct

// --- Data for PrimeDrive 2.0 Features (Existing) ---
const primeDrive2ProjectFeatures: PrimeDriveFeatureItem[] = [
  {
    id: "primedrive2-login",
    title: "Seamless & Secure Login",
    description: "Experience a hassle-free and secure entry into PrimeDrive 2.0. Our intuitive login process gets you started in moments, ensuring your access is protected.",
    imageSrc: LoginPage,
    imageAlt: "PrimeDrive 2.0 Login Page Screenshot"
  },
  {
    id: "primedrive2-home",
    title: "Intuitive Home Screen",
    description: "Discover your next premium ride with our elegantly designed home screen. Easily navigate through featured vehicles, new arrivals, and personalized recommendations.",
    imageSrc: HomeScreen,
    imageAlt: "PrimeDrive 2.0 Home Screen Screenshot"
  },
  {
    id: "primedrive2-car-show",
    title: "Immersive Car Showcase",
    description: "Explore vehicles like never before. Our car show page offers stunning visuals, 360-degree views, and detailed specifications for an informed choice.",
    imageSrc: CarShow,
    imageAlt: "PrimeDrive 2.0 Car Show Page Screenshot"
  },
  {
    id: "primedrive2-payment",
    title: "Streamlined Payment Process",
    description: "Finalize your premium ride selection with a transparent and secure payment system. Multiple options and clear steps make the transaction smooth and trustworthy.",
    imageSrc: PaymentPage,
    imageAlt: "PrimeDrive 2.0 Payment Page Screenshot"
  },
];

const thyleadsFeatures: PrimeDriveFeatureItem[] = [
  {
    id: "thyleads-landing",
    title: "High-Performance Landing Page",
    description: "Designed for optimal conversion, the landing page captures user attention and drives engagement with clear call-to-actions and compelling content.",
    imageSrc: ThyleadsFeature1Placeholder,
    imageAlt: "Thyleads Landing Page Design"
  },
  {
    id: "thyleads-lead-mgmt",
    title: "Optimized Lead Management",
    description: "An intuitive interface for managing and tracking leads, ensuring sales teams can efficiently follow up and convert prospects.",
    imageSrc: ThyleadsFeature2Placeholder,
    imageAlt: "Thyleads Lead Management Dashboard"
  },
];

const dribbleFeatures: PrimeDriveFeatureItem[] = [

    {
        id: "dribble-login",
        title: "Seamless & Secure Login",
        description: "Experience a hassle-free and secure entry into Dribble. Our intuitive login process gets you started in moments, ensuring your access is protected.",
        imageSrc: DribbleFeature1Placeholder,
        imageAlt: "Dribble Login Page Screenshot"
    },
    {
        id: "dribble-ui",
        title: "Clean & Intuitive Interface",
        description: "A modern, Dribbble-inspired UI with a custom aesthetic, built for optimal performance and seamless hosting via Vercel.",
        imageSrc: DribbleFeature2Placeholder,
        imageAlt: "Dribble 2.0 User Interface"
    },
    {
        id: "dribble-gallery",
        title: "Dynamic Design Gallery",
        description: "Browse a curated collection of design inspirations with an effortlessly smooth and visually appealing gallery layout.",
        imageSrc: DribbleFeature3Placeholder,
        imageAlt: "Dribble 2.0 Design Gallery"
    },
];

// --- Data for Detective Dev Features ---
const detectiveDevFeatures: PrimeDriveFeatureItem[] = [
    {
        id: "detectivedev-search",
        title: "GitHub Profile Lookup",
        description: "Search for GitHub users by entering their username to retrieve and display their profile information, including bio, repositories, followers, and more.",
        imageSrc: DetectiveDevFeature1Placeholder,
        imageAlt: "Detective Dev GitHub Search"
    },
    {
        id: "detectivedev-ui",
        title: "Responsive and Intuitive Interface",
        description: "Experience a user-friendly interface built with HTML, CSS, and JavaScript, ensuring seamless interaction across various devices and screen sizes.",
        imageSrc: DetectiveDevFeature2Placeholder,
        imageAlt: "Detective Dev User Interface"
    },
    {
        id: "detectivedev-results",
        title: "Real-Time Data Retrieval",
        description: "Fetch up-to-date GitHub profile data instantly using the GitHub API, providing accurate and timely information to enhance user productivity.",
        imageSrc: DetectiveDevFeature3Placeholder,
        imageAlt: "Detective Dev Search Results"
    } 
];  

// --- Data for Weather App Features ---
const weatherAppFeatures: PrimeDriveFeatureItem[] = [
    {
        id: "weatherapp-ui",
        title: "Visually Appealing UI",
        description: "An intuitive and attractive user interface designed with React.js and Tailwind CSS for a pleasant user experience.",
        imageSrc: WeatherAppFeature1Placeholder,
        imageAlt: "Weather App User Interface"
    },

    {
        id: "weatherapp-live",
        title: "Live Weather Data",
        description: "Access real-time weather information including temperature, humidity, and forecasts through OpenWeather API integration.",
        imageSrc: WeatherAppFeature2Placeholder,
        imageAlt: "Weather App Live Data Display"
    },
];

// --- Data for Techscholars Features ---
const techscholarsFeatures: PrimeDriveFeatureItem[] = [
  {
    id: "techscholars-home",
    title: "Smart & Intuitive Homepage",
    description: "Welcome users with a sleek, informative homepage highlighting key features, mission, and access points of TechScholars.",
    imageSrc: TechscholarsFeature1Placeholder,
    imageAlt: "Techscholars Home Page"
  },
  {
    id: "techscholars-services",
    title: "Dynamic Learning Services",
    description: "Explore a variety of tech-powered educational services designed to enhance digital learning for students and institutions.",
    imageSrc: TechscholarsFeature4Placeholder,
    imageAlt: "Techscholars Services Section"
  },
  {
    id: "techscholars-work",
    title: "Projects & Case Studies",
    description: "Showcase of impactful projects, student work, and real-world case studies built through the TechScholars platform.",
    imageSrc: TechscholarsFeature3Placeholder,
    imageAlt: "Techscholars Work and Projects"
  },
  {
    id: "techscholars-contact",
    title: "Quick Contact & Support",
    description: "Easily connect with the TechScholars team for inquiries, support, or collaboration opportunities.",
    imageSrc: TechscholarsFeature2Placeholder,
    imageAlt: "Techscholars Contact Page"
  },
];



// --- Data for Tic Tac Toe Features ---
const ticTacToeFeatures: PrimeDriveFeatureItem[] = [
  {
    id: "tictactoe-gameplay",
    title: "Interactive Gameplay",
    description: "Engage in the classic game of Tic-Tac-Toe with a smooth and responsive interface.",
    imageSrc: TicTacToeFeature1Placeholder,
    imageAlt: "Tic Tac Toe Gameplay"
  },
  {
    id: "tictactoe-logic",
    title: "Real-time Game Logic",
    description: "Experience seamless turn-based play and accurate win condition checking for an authentic game.",
    imageSrc: TicTacToeFeature2Placeholder,
    imageAlt: "Tic Tac Toe Game Logic"
  },
];


// --- Reusable Component for Project Feature Showcase (Modified from PrimeDriveFeatureShowcase) ---
// This component is now generic enough to be used by all projects.
// Name changed for clarity, but it's essentially the same PrimeDriveFeatureShowcase.
const ProjectFeatureShowcase: React.FC<ProjectFeatureShowcaseData> = ({
  titleHighlight,
  introduction,
  contributions,
  features,
  projectUrl,
  projectLinkText = "Explore Full Project",
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
        {/* Introduction and Key Contributions */}
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans space-y-6">
          <p>
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">
              {titleHighlight}
            </span>{" "}
            {introduction}
          </p>
          <div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2 text-xl md:text-2xl">
              Key Contributions:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300">
              {contributions.map((item, index) => (
                <li key={`contribution-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Highlights Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-8 md:mb-10 text-center md:text-left pt-6 border-t border-neutral-300 dark:border-neutral-700 mt-8 md:mt-10">
            Feature Highlights
          </h3>
          <div className="space-y-12 md:space-y-20 lg:space-y-24">
            {features.map((feature, index) => (
              <PrimeDriveFeatureSection
                key={feature.id}
                {...feature}
                reverseLayout={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        {/* Project Link Button */}
        {projectUrl && (
          <div className="mt-10 md:mt-12 text-center">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-md hover:shadow-lg"
            >
              {projectLinkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// --- PrimeDriveFeatureSection Component (Existing, used by ProjectFeatureShowcase) ---
interface PrimeDriveFeatureSectionProps {
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const PrimeDriveFeatureSection: React.FC<PrimeDriveFeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false,
}) => {
  return (
    <div className={`flex flex-col ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 lg:gap-16`}>
      <div className="md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-white">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className="md:w-1/2 w-full mt-4 md:mt-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={800}
          className="rounded-xl object-cover shadow-2xl w-full h-auto"
          priority={reverseLayout} // If true, this image will be loaded with high priority
        />
      </div>
    </div>
  );
};


// --- Main Projects Data (Updated) ---
const projects: ProjectData[] = [
  {
    category: "Thyleads",
    title: "B2B SAAS Leads Generation.",
    src: ThyleadsAsset,
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
      features: thyleadsFeatures,
    },
  },
  {
    category: "PrimeDrive 2.0",
    title: "Your Premium Ride Showcase",
    src: Primedrive2Asset,
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
      features: primeDrive2ProjectFeatures, // Uses the existing detailed features
    },
  },
  {
    category: "Dribble 2.0",
    title: "Modern Design Platform Clone",
    src: DribbleAsset,
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
      features: dribbleFeatures,
    },
  },
  {
    category: "Techscholars",
    title: "EdTech Platform Development",
    src: TechscholarsAsset,
    contentData: {
      titleHighlight: "As a Software Developer (Next.js) at Techscholars,",
      introduction: "I designed and developed user-friendly, high-performance web applications using Next.js, and Tailwind CSS, collaborating with clients to transform requirements into technical implementations.",
      contributions: [
        "Designed and developed a visually engaging and informative Home page to clearly present TechScholars' mission, services, and platform value",
        "Built the Work page to feature real-world projects and student outcomes, integrating animations and performance-optimized layouts.",
        "Created a responsive and accessible Contact page with integrated form handling for inquiries and collaboration opportunities.",
        "Integrated backend APIs to enable real-time data handling across all site sections.",
        "Crafted responsive UI components using Tailwind CSS and Shadcn UI, ensuring cross-device compatibility and consistency.",
      ],
      projectUrl: "https://techscholars.vercel.app/",
      projectLinkText: "Visit Techscholars",
      features: techscholarsFeatures,
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
      features: detectiveDevFeatures,
    },
  },
  {
    category: "Weather App",
    title: "Real-Time Weather Updates",
    src: WeatherAsset,
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
      features: weatherAppFeatures,
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
      features: ticTacToeFeatures,
    },
  },
];

// --- Modified AppleCardsCarouselDemo ---
export function AppleCardsCarouselDemo() {
  const cards = projects.map((project, index) => {
    // All projects now use ProjectFeatureShowcase
    const contentNode = <ProjectFeatureShowcase {...project.contentData} />;

    return (
      <Card
        key={`${project.title}-${index}`} // Using a more unique key
        card={{
          category: project.category,
          title: project.title,
          src: project.src,
          content: contentNode,
        }}
        index={index}
      />
    );
  });

  return (
    <div className="w-full bg-[#000000]">
      <Carousel items={cards} />
    </div>
  );
}