import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.png";

export const HERO_CONTENT =
  "Full-Stack Developer and Computer Engineering student focused on building scalable, production-ready applications. Experienced with React, Next.js, Node.js, Spring Boot, MongoDB, REST APIs, microservices, and modern DevOps tools, with hands-on experience taking projects from development to deployment.";
export const ABOUT_TEXT =
  "I’m a Computer Science student and FullStack Developer who enjoys building clean, responsive, and user-friendly web applications. I like turning ideas into simple and interactive digital experiences while continuously improving my skills through hands-on projects.I have a strong foundation in Core and Advanced Java, and I’m currently exploring full-stack development using the MERN stack along with Spring Boot applications.Beyond coding, I’m a curious learner with an interest in languages, holding a German A1 certification. I enjoy learning new technologies and building projects that solve real-world problems.";

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Technical Member",
    company: "Akatsuki Coding Club, RCPIT",
    description:
      "Contribute to technical activities, coding events, workshops, and development projects. Worked on the Akatsuki Project Hub, a platform for managing student projects, including an admin dashboard with role-based access and an automated project approval workflow.",
    technologies: [
      "Java",
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },

  {
    year: "Jun 2026 - Aug-2026",
    role: "Software Engineering Intern",
    company: "eInfoChips - An Arrow Electronics Company",
    description:
      "Working on a hardware-integrated gesture detection system for real-time hand-motion recognition using embedded sensors and software. Contributed to software processing, gesture output, testing, and debugging for reliable real-time detection.",
    technologies: ["C", "Embedded Systems", "ESP32", "MPU6050"],
  },

  {
    year: "Apr 2026",
    role: "Freelance Frontend Developer",
    company: "Accredian",
    description:
      "Developed a freelancing-platform clone using Next.js with dynamic routing and reusable React components. Built 10+ reusable components across 5+ pages and optimized client-side performance through code-splitting and route optimization.",
    technologies: ["Next.js", "React", "JavaScript", "HTML", "CSS"],
  },

  {
    year: "Sep 2024 - Nov 2024",
    role: "Java Programming Intern",
    company: "Nextech Infosystems",
    description:
      "Worked on Java programming and GUI application development using JavaFX. Gained hands-on experience with Java application development, user interface design, and database connectivity.",
    technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
  },
];

export const PROJECTS = [
  {
    title: "AI-Fitness Application",
    image: project1,
    description:
      "The AI Fitness Application is a comprehensive fitness tracking and recommendation platform that leverages artificial intelligence to provide personalized workout and nutrition recommendations. Built with a modern microservices architecture, the application offers real-time activity tracking, AI-powered fitness insights, and a seamless user experience.",
    technologies: [
      "Java",
      "SpringBoot",
      "Microservices",
      "MySQL",
      "Postgres",
      "Kafka",
      "RabbitMQ",
      "KeyCloak",
      "Oauth2.0",
      "Docker",
      " Maven",
      "React",
      "TailwindCSS",
    ],
    github:
      "https://github.com/Jagruti-dhole18/AI-Fitness-Application-MVC-Architecture",
  },
  {
    title: "DisasterConnect",
    image: project6,
    description:
      "A real-time disaster response platform connecting citizens, volunteers, NGOs, and administrators to coordinate emergency assistance. Features include SOS alerts, missing persons, disaster resources, camps, donations, and real-time communication.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Leaflet",
      "Cloudinary",
    ],
    github: "https://github.com/Jagruti-dhole18/DisasterConnect",
    live: "https://disasterconnect-gamma.vercel.app",
  },
  {
    title: "Signalist - Stock Trading Platform",
    image: project2,
    description:
      "Signalist is a modern stock trading dashboard built with Next.js, React, and MongoDB, offering real-time market data, stock insights, personalized watchlists, and daily news summaries.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Inngest",
      "CodeRabbit",
    ],
    github:
      "https://github.com/Jagruti-dhole18/Signalist-stock-trading-platform",
    live: "https://signalist-trading-pi.vercel.app/",
  },
  {
    title: "SyncTalk (Mini Zoom Clone)",
    image: project3,
    description:
      "A real-time video conferencing web application inspired by Zoom, enabling users to create/join meetings, communicate via video/audio, and interact seamlessly.",
    technologies: ["React", "Node.js", "Express", "WebRTC", "Socket.io"],
    github: "https://github.com/Jagruti-dhole18/SyncTalk",
    live: "https://synctalkapp.onrender.com",
  },

  {
    title: "Zerodha Clone",
    image: project4,
    description:
      "A full-stack stock trading platform inspired by Zerodha, featuring authentication, dashboard, order management, and data visualization.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Jagruti-dhole18/Zerodha-frontend",
    live: "https://zerodhatradingapp.netlify.app",
  },
  {
    title: "Hospital Management System",
    image: project5,
    description:
      "A desktop-based application built using Java Swing and MySQL to manage hospital operations such as patient registration, appointments, inventory, and billing.",
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/Jagruti-dhole18/Hospital-Management-System",
  },
];

export const CONTACT = {
  address: "10 A, Mahatma fule nagar shingave road , shirpur ",
  phoneNo: "+91 9322013177 ",
  email: "jagrutidhole18@gmail.com",
};
