import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpeg'
import project3 from '../assets/project-3.jpeg'
import project4 from '../assets/project-4.jpeg'
import project5 from '../assets/project-5.jpeg'

export const HERO_CONTENT ="Frontend Developer and CS student with a strong foundation in web technologies and programming. Experienced in building responsive interfaces and currently advancing in the MERN stack.";

export const ABOUT_TEXT = "I’m a Computer Science student and FullStack Developer who enjoys building clean, responsive, and user-friendly web applications. I like turning ideas into simple and interactive digital experiences while continuously improving my skills through hands-on projects.I have a strong foundation in Core and Advanced Java, and I’m currently exploring full-stack development using the MERN stack along with Spring Boot applications.Beyond coding, I’m a curious learner with an interest in languages, holding a German A1 certification. I enjoy learning new technologies and building projects that solve real-world problems.";

export const EXPERIENCES = [
    {
        year: "2024 - current",
        role: "Frontend Developer",
        company: "Akatsuki Coding Club",
        description: "I’m an active member of the Akatsuki Coding Club, where I learn new coding skills, work on projects, and take part in events. Being part of the club helps me improve my problem-solving, teamwork, and creativity. It’s a great place to learn and grow with other students who love technology.",
        technologies: ["HTML", "CSS", "Javascript","Java","mySQL"],
      },
        {
            year: " sep-2024 - nov-2024",
            role: "Intern",
            company: "Nextech Infosystems",
            description: "Designed and developed various types of UI using JavaFX and also get more information about how JavaFX works in Applications although I am not able to create fully developed applications but i got basic idea about JavaFX",
            technologies: ["JavaFX"],
        },
];

export const PROJECTS = [
  {
    title: "Hospital Management System",
    image: project1,
    description:
      "A desktop-based application built using Java Swing and MySQL to manage hospital operations such as patient registration, appointments, inventory, and billing.",
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/Jagruti-dhole18/Hospital-Management-System",
  },

  {
    title: "SyncTalk (Mini Zoom Clone)",
    image: project2,
    description:
      "A real-time video conferencing web application inspired by Zoom, enabling users to create/join meetings, communicate via video/audio, and interact seamlessly.",
    technologies: ["React", "Node.js", "Express", "WebRTC", "Socket.io"],
    github: "https://github.com/Jagruti-dhole18/SyncTalk",
    live: "https://synctalkapp.onrender.com",
  },

  {
    title: "Zerodha Clone",
    image: project3,
    description:
      "A full-stack stock trading platform inspired by Zerodha, featuring authentication, dashboard, order management, and data visualization.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Jagruti-dhole18/Zerodha-frontend",
    live: "https://zerodhatradingapp.netlify.app",
  },

  {
    title: "Weather App",
    image: project4,
    description:
      "A responsive weather application built with React that fetches real-time weather data using APIs, allowing users to search cities and view current conditions and forecasts.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/Jagruti-dhole18/Weather-App",
    // live: "https://your-weather-app.vercel.app",
  },
  {
  title: "StudyGeni (AI Study Assistant)",
  image: project5, // add your image
  description:
    "An AI-powered backend application that generates summaries and quizzes from uploaded documents. It processes files and uses AI models to extract key insights and create interactive learning content.",
  technologies: ["Node.js", "Express", "MongoDB", "AI API"],
  github: "https://github.com/Jagruti-dhole18/StudyGeni-backend-project",
  live: "study-geni-backend-project.vercel.app",
},

];


export const CONTACT = {
  address: "10 A, Mahatma fule nagar shingave road , shirpur ",
  phoneNo: "+91 9322013177 ",
  email: "jagrutidhole18@gmail.com",
};