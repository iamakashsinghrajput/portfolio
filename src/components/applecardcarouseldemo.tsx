"use client";
import React from "react";

import { Carousel, Card } from "@/src/components/ui/apple-cards-carousel";
import Weather from "@/src/assets/weather.png";
import Detective from "@/src/assets/detectivedev.png";
import tictactoe from "@/src/assets/tictactoe.png";
import Primedrive from "@/src/assets/PrimeDrive.png";
import Thyleads from "@/src/assets/Thyleads.png";
import Techscholars from "@/src/assets/Techscholars.png";
import Dribble from "@/src/assets/dribble.png";
import Primedrive2 from "@/src/assets/PrimeDrive2.0.png";

export function AppleCardsCarouselDemo() {
const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="h-full relative z-50 w-full bg-[#000000]">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              As a Frontend Developer at Thyleads Pvt. Ltd.
              </span>{" "}
              I played a key role in designing and developing the high-performance 
              landing page and optimizing the lead management interface. 
              My work focused on creating an intuitive, responsive, and visually appealing user experience, 
              ensuring seamless navigation across all devices.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Contributions:
              </span>{<br/>}
               - Developed a dynamic, user-friendly frontend using React.js, Next.js, and Tailwind CSS.
               <br/>
               - Optimized UI/UX for better lead tracking and management.
               <br/>
               - Implemented a fully responsive design, ensuring smooth performance on desktops, tablets, and mobile devices.
               <br/>
               - Improved website speed and SEO through efficient Next.js rendering techniques.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://thyleads.com">Thyleads</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
};

const DummyContent6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I created Dribble 2.0,
              </span>{" "}
              a modern redesign and functional clone of the popular design platform Dribbble, 
              crafted to showcase curated design content in an engaging and interactive layout. 
              Built using Tailwind CSS, and Next.js, MongoDB this project reflects my skills in 
              modern frontend & backend architecture, component-based design, and responsive UI development.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Engineered a clean and intuitive interface using Next.js and Tailwind CSS, closely mimicking the look and feel of Dribbble with a custom aesthetic twist.
               <br/>
               - Developed a dynamic gallery layout, allowing users to browse and view design inspirations effortlessly.
               <br/>
               - Integrated category-based filtering and hover interactions to enhance user engagement and ease of content exploration.
               <br/>
               - Deployed with Vercel for optimal performance and seamless hosting, ensuring lightning-fast loading and responsiveness on all devices.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://dribble-2-0.vercel.app">Dribble 2.0</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}


const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I developed Detective Dev,
              </span>{" "}
              a dynamic web application designed to simplify GitHub developer 
              searches by fetching real-time data using the GitHub API. 
              This project showcases my expertise in React.js, Tailwind CSS, and JavaScript, 
              focusing on performance optimization and seamless user experience.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Implemented real-time GitHub API integration to fetch and display developer profiles.
               <br/>
               - Designed an intuitive and responsive UI using React.js and Tailwind CSS for a seamless user experience.
               <br/>
               - Optimized search functionality for fast and accurate results.
               <br/>
               - Ensured cross-device compatibility, making the application fully responsive on desktops, tablets, and mobile devices.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://detectivedev.vercel.app">Detective Dev</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I developed a Weather App,
              </span>{" "}
              that provides real-time weather updates using OpenWeather API. 
              This project highlights my expertise in React.js, Next.js, and Tailwind CSS, 
              focusing on seamless API integration, UI design, and performance optimization.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Integrated OpenWeather API to fetch live weather data, including temperature, humidity, and forecasts.
               <br/>
               - Designed an intuitive and visually appealing UI using React.js and Tailwind CSS for an engaging user experience.
               <br/>
               - Implemented responsive design, ensuring smooth functionality across desktops, tablets, and mobile devices.
               <br/>
               - Optimized performance using Next.js server-side rendering (SSR) for faster data fetching and improved SEO.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://weather-githhub-io.vercel.app/">Weather App</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              As a Software Developer (Next.js Developer) at Techscholars,
              </span>{" "}
              I was responsible for designing and developing user-friendly, 
              high-performance web applications using React.js, Next.js, and Tailwind CSS. 
              My role involved collaborating closely with clients to transform project 
              requirements into technical implementations while ensuring seamless functionality
               and responsiveness.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Contributions:
              </span>{<br/>}
               - Developed and optimized the student dashboard, admin panel, and user authentication system.
               <br/>
               - Integrated backend APIs to ensure smooth data flow and efficient application performance.
               <br/>
               - Implemented server-side rendering (SSR) and client-side rendering (CSR) using Next.js for better SEO and performance.
               <br/>
               - Designed responsive and visually appealing UI components with Tailwind CSS and Shadcn.
               <br/>
               - Ensured cross-device compatibility, providing a seamless experience across desktops, tablets, and mobile devices.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://techscholars.co.in">Techscholars</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}

const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I developed PrimeDrive,
              </span>{" "}
              an innovative car booking platform designed to provide a seamless and 
              hassle-free experience for users looking to rent vehicles. 
              Built using Next.js, Tailwind CSS, and HTML, this project showcases 
              my ability to create dynamic, responsive, and user-friendly web applications.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Designed and developed an intuitive UI using Tailwind CSS, ensuring a sleek and modern look.
               <br/>
               - Implemented a location-based car search feature, allowing users to find available vehicles nearby.
               <br/>
               - Optimized performance and SEO using Next.js server-side rendering (SSR) for faster load times.
               <br/>
               - Ensured cross-device compatibility, making the platform accessible across desktops, tablets, and mobile devices.
               <br/>
               - Enhanced user experience by streamlining the booking process for ease of use.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://primedrive-topaz.vercel.app">PrimeDrive</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}



const DummyContent7 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I developed Tic-Tac-Toe,
              </span>{" "}
              a classic multiplayer web game designed for a smooth and engaging user experience. 
              Built using React.js and Tailwind CSS, this project showcases my expertise in 
              frontend development, game logic implementation, and responsive design.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Developed an interactive and responsive UI using React.js and Tailwind CSS for a seamless gameplay experience.
               <br/>
               - Implemented real-time game logic, allowing players to take turns and check for winning conditions dynamically.
               <br/>
               - Designed a clean and intuitive interface, ensuring accessibility across desktops, tablets, and mobile devices.
               <br/>
               - Optimized performance and state management, making the game smooth and bug-free.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://tictactoegame-gamma.vercel.app/">Tic-Tac-Toe</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}


const DummyContent8 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I developed PrimeDrive 2.0,
              </span>{" "}
              an innovative car booking platform designed to provide a seamless and 
              hassle-free experience for users looking to rent vehicles. 
              Built using Next.js, Tailwind CSS, HTML, MongoDB this project showcases 
              my ability to create dynamic, responsive, and user-friendly web applications.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features & Contributions:
              </span>{<br/>}
               - Developed a responsive car showcase platform using Next.js, Tailwind CSS, and TypeScript, enabling smooth and dynamic display of vehicle
               images across multiple devices.
               <br/>
               - Implemented optimized image rendering and smooth transitions for 360-degree car views, enhancing user experience and interactivity
               <br/>
               - Integrated static image sequences into a seamless visual flow, using conditional frame rendering and keyboard navigation to simulate rotation
               and depth.
               <br/>
               - Launched PrimeDrive with automated car comparison features, utilizing machine learning algorithms to recommend vehicles based on user
               preferences, boosting engagement by 35%.
            </p>
            <br/>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Link:
              </span>
              <br/>
              <br/>
              <a href="https://prime-drivee.vercel.app">PrimeDrive 2.0</a>
            </p>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}

const data = [
  {
    category: "Thyleads",
    title: "B2B SAAS leads Generation.",
    // src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: Thyleads,
    content: <DummyContent />,
  },
  {
    category: "PrimeDrive 2.0",
    title: "Your Premium Ride",
    // src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src : Primedrive2,
    content: <DummyContent8 />,
  },
  {
    category: "Dribble 2.0",
    title: "Designs for your portfolio",
    // src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: Dribble,
    content: <DummyContent6 />,
  },
  {
    category: "Detective Dev",
    title: "Search your Dev Partner.",
    // src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: Detective,
    content: <DummyContent2 />,
  },
  {
    category: "Weather",
    title: "What's your weather like?",
    // src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: Weather,
    content: <DummyContent3 />,
  },

  {
    category: "Techscholars",
    title: "Want to learn, reach Techscholars.",
    // src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: Techscholars,
    content: <DummyContent4 />,
  },
  {
    category: "PrimeDrive",
    title: "Get your Prime Ride with PrimeDrive.",
    // src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src : Primedrive,
    content: <DummyContent5 />,
  },

  {
    category: "Tic Tac Toe",
    title: "Play Tic Tac Toe with me.",
    // src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: tictactoe,
    content: <DummyContent7 />,
  },

  
];
