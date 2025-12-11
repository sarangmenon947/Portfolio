import htmlLogo from "./assets/tech/htmlLogo.png";
import cssLogo from "./assets/tech/cssLogo.png";
import jsLogo from "./assets/tech/jsLogo.png";
import reactLogo from "./assets/tech/reactLogo.png";
import angularLogo from "./assets/tech/angularLogo.webp";
import nextLogo from "./assets/tech/nextLogo.jpg";
import tailwindLogo from "./assets/tech/tailwindLogo.png";
import bootstrapLogo from "./assets/tech/bootstrapLogo.png";

import nodeLogo from "./assets/tech/nodeLogo.png";
import expressLogo from "./assets/tech/expressLogo.svg";
import mySqlLogo from "./assets/tech/mySqlLogo.png";
import mongoDbLogo from "./assets/tech/mongoDbLogo.svg";
import firebaseLogo from "./assets/tech/firebaseLogo.webp";
import postgreLogo from "./assets/tech/postgreLogo.png";

import cLogo from "./assets/tech/cLogo.png";
import cppLogo from "./assets/tech/cppLogo.png";
import csharpLogo from "./assets/tech/csharpLogo.png";
import javaLogo from "./assets/tech/javaLogo.png";
import pythonLogo from "./assets/tech/pythonLogo.png";
import tsLogo from "./assets/tech/tsLogo.png";
import kotlinLogo from "./assets/tech/kotlinLogo.jpg";
import dartLogo from "./assets/tech/dartLogo.png";
import rLogo from "./assets/tech/rLogo.png";
import swiftLogo from "./assets/tech/swiftLogo.png";
import rubyLogo from "./assets/tech/rubyLogo.png";

import gitLogo from "./assets/tech/gitLogo.png";
import gitHubLogo from "./assets/tech/gitHubLogo.webp";
import vscodeLogo from "./assets/tech/vscodeLogo.png";
import postmanLogo from "./assets/tech/postmanLogo.png";
import vercelLogo from "./assets/tech/vercelLogo.svg";
import netlifyLogo from "./assets/tech/netlifyLogo.webp";

import awsLogo from "./assets/tech/awsLogo.webp";
import gcpLogo from "./assets/tech/gcpLogo.png";
import azureLogo from "./assets/tech/azureLogo.png";
import cloudflareLogo from "./assets/tech/cloudflareLogo.png";

import googleLogo from "./assets/tech/googleLogo.png";
import microsoftLogo from "./assets/tech/microsoftLogo.webp";
import zohoLogo from "./assets/tech/zohoLogo.png";

import wctdLogo from "./assets/wctdLogo.jpg";

import ybiLogo from "./assets/tech/ybiLogo.jpg";

import birlaBrainiacsLogo from "./assets/tech/birlaBrainiacsLogo.png";

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'React JS', logo: reactLogo },
            { name: 'Angular', logo: angularLogo },
            { name: 'Next JS', logo: nextLogo },
            { name: 'Tailwind CSS', logo: tailwindLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodeLogo },
            { name: 'Express JS', logo: expressLogo },
            { name: 'MySQL', logo: mySqlLogo },
            { name: 'MongoDB', logo: mongoDbLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'C-Sharp', logo: csharpLogo },
            { name: 'JavaScript', logo: jsLogo },
            { name: 'TypeScript', logo: tsLogo },
            { name: 'Kotlin', logo: kotlinLogo },
            { name: 'Dart', logo: dartLogo },
            { name: 'R', logo: rLogo},
            { name: 'Swift', logo: swiftLogo },
            { name: 'Ruby', logo: rubyLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: gitHubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
        ],
    },
    {
        title: 'Cloud Services',
        skills: [
            { name: 'AWS', logo: awsLogo },
            { name: 'GCP', logo: gcpLogo },
            { name: 'Azure', logo: azureLogo },
            { name: 'Cloudflare', logo: cloudflareLogo },
        ],
    },
    {
        title: 'Workspaces',
        skills: [
            { name: 'Google', logo: googleLogo },
            { name: 'Microsoft', logo: microsoftLogo },
            { name: 'Zoho', logo: zohoLogo },
        ],
    },
];

export const volunteerships = [
    {
        id: 0,
        img: wctdLogo,
        company: "We Connect the Dots",
        location: "Albany, New York, USA",
        date: "October 2025 - Present",
        type: "Volunteering Remotely",
        title: "Community Ambassador Programme (CAP) Team Member & Web Design Volunteer",
        desc: "Supporting the mission to promote workforce skills related to science, technology, engineering, arts,\n" +
            "and math (STEAM). working alongside a team, helping plan and run the organization's programs. Part of\n" +
            "the team that redesigned the current website of the organisation.",
        skills: [
            "Working with a team of peers to plan and execute educational programs and Hackathons centered\n" +
            "on STEAM topics, including AI and coding.",
            "Assisting with program design and development by providing student perspectives and\n" +
            "contributing to the agile design-thinking process.",
            "Designing and conducting workshops based on tech.",
        ],
        links: [
            "https://www.we-connect-the-dots.org/cap-team",
            "https://www.we-connect-the-dots.org/volunteers",
        ],
    },
];

export const internships = [
    {
        id: 0,
        img: ybiLogo,
        skill: "Business & Data Analytics",
        company: "YBI Foundation",
        date: "June 2025",
        desc: "Engaged in live projects and real-world scenarios, gaining hands-on experience in applying data analytics concepts and techniques. The program focuses on practical, industry-relevant learning to build strong analytical and problem-solving skills.",
        skills: [
            "Data Manipulation",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Machine Learning",
            "Scikit-Learn",
            "Keras",
            "Data Preprocessing",
            "Model Training and Prediction",
            "Web Scraping",
        ],
    },
    {
        id: 1,
        img: ybiLogo,
        skill: "Python Programming",
        company: "YBI Foundation",
        date: "2024",
        desc: "Developed intermediate-level practical Python skills through real-world projects. Worked with advanced Python\n" +
            "concepts such as object-oriented programming (OOP), data manipulation using libraries like Pandas and\n" +
            "NumPy, and familiarised with web applications using frameworks like Flask or Django.",
        skills: [
            "OOPS",
            "Error Handling",
            "Flask",
            "Django",
            "Version Control with Git",
            "Code Optimization and Debugging",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: birlaBrainiacsLogo,
        school: "Birla Brainiacs - India",
        date: "April 2025 - Present",
        desc: "Pursuing academic excellence through a comprehensive online learning platform. Developing strong fundamentals in STEM subjects, language arts, and critical thinking skills. The digital learning environment fosters self-motivation, discipline, and adaptability while maintaining high academic standards.",
        degree: "9th Grade",
    },
];

export const projects = [
    {
        id: 0,
        name: "Transportation Data Science Project",
        year: "2025",
    },
    {
        id: 0,
        name: "Computer Vision App with Azure Cognitive Services",
        year: "2025",
    },
    {
        id: 1,
        name: "House Price Predictor using Python",
        year: "2024",
    },
    {
        id: 2,
        name: "Cricket Data Analysis using Postgre SQL",
        year: "2025",
    },
    {
        id: 3,
        name: "PhonePe Data Analysis using Power BI",
        year: "2024",
    },
    {
        id: 4,
        name: "Blinkit Data Analysis using SQL",
        year: "2024",
    },
    {
        id: 5,
        name: "Weather Monitoring System using Iot & Arduino",
        year: "2024",
    },
    {
        id: 6,
        name: "Object Following Robot",
        year: "2025",
    },
    {
        id: 7,
        name: "Black-Line Following Robot",
        year: "2025",
    },
    {
        id: 8,
        name: "Smart Sensor using Arduino",
        year: "2025",
    },
    {
        id: 9,
        name: "Daily Habit and Mood Tracker",
        year: "2025",
    },
    {
        id: 10,
        name: "AI Chatbot for Senior Citizens",
        year: "2025",
    },
    {
        id: 11,
        name: "Heart Failure Model Predictor",
        year: "2025",
    },
    {
        id: 12,
        name: "AI Based Community Resource Navigator",
        year: "2025",
    },
    {
        id: 13,
        name: "Simple Token Transfer Contract",
        year: "2025",
    },
    {
        id: 14,
        name: "NMAP Bash Scanner",
        year: "2025",
    },
    {
        id: 15,
        name: "Neflix Clone using HTML & CSS",
        year: "2025",
    },
    {
        id: 16,
        name: "JioCinema Clone using React JS",
        year: "2025",
    },
    {
        id: 17,
        name: "Fun Facts Generator App",
        year: "2025",
    },
    {
        id: 18,
        name: "Secure Console Login Auth",
        year: "2025",
    },
    {
        id: 19,
        name: "WiFi Quality Checker using esp8266",
        year: "2025",
    },
    {
        id: 20,
        name: "Phonebook using C",
        year: "2025",
    },
    {
        id: 21,
        name: "Electronics Damage Checker using Java",
        year: "2024",
    },
    {
        id: 22,
        name: "Tic Tac Toe Game using C",
        year: "2025",
    },
    {
        id: 23,
        name: "TechBridge",
        year: "2025",
    },
    {
        id: 24,
        name: "Gas Leakage Detection System using esp8266",
        year: "2025",
    },
    {
        id: 25,
        name: "Rock Paper Scissors Game",
        year: "2024",
    },
    {
        id: 26,
        name: "Ship Target Game",
        year: "2024",
    },
    {
        id: 27,
        name: "Recycling Paper Bags Game",
        year: "2024",
    },
];

export const certifications = [
    {
        id: 0,
        name: "Advanced Diploma in Microsoft Excel",
        institution: "Thames College, Birmingham, England",
        year: "2025",
    },
    {
        id: 14,
        name: "Serious Games using AI",
        institution: "Beaver Works Summer Institute, Massachusetts Institute of Technology, USA",
        year: "2025",
    },
    {
        id: 15,
        name: "Cyber Operations",
        institution: "Beaver Works Summer Institute, Massachusetts Institute of Technology, USA",
        year: "2025",
    },
    {
        id: 36,
        name: "Cyber Operations",
        institution: "Beaver Works Summer Institute, Massachusetts Institute of Technology, USA",
        year: "2025",
    },
    {
        id: 37,
        name: "Python Core",
        institution: "Beaver Works Summer Institute, Massachusetts Institute of Technology, USA",
        year: "2025",
    },
    {
        id: 1,
        name: "Basic Programming using Python",
        institution: "E&ICT Academy, Indian Institute of Technology (IIT Kanpur), India",
        year: "2024",
    },
    {
        id: 20,
        name: "IoT Applications with Sensors, Embedded Systems & Data Analytics",
        institution: "E&ICT Academy, Indian Institute of Technology (IIT Roorkee), India",
        year: "2025",
    },
    {
        id: 3,
        name: "C & C++ Programming",
        institution: "Spoken Tutorial Programme, Indian Institute of Technology (IIT Bombay), India",
        year: "2025",
    },
    {
        id: 2,
        name: "Advanced Python Programming",
        institution: "University of Helsinki, Finland",
        year: "2025",
    },
    {
        id: 9,
        name: "Robotics (Level 1-6)",
        institution: "MATH JUNIOR, India",
        year: "2025",
    },
    {
        id: 22,
        name: "Elements of AI",
        institution: "University of Helsinki, Finland",
        year: "2024",
    },
    {
        id: 23,
        name: "Ethics of AI",
        institution: "University of Helsinki, Finland",
        year: "2025",
    },
    {
        id: 34,
        name: "Computer Vision - Image Understanding For Efficient Business And Industry",
        institution: "Lulea University of Technology, Sweden",
        year: "2024",
    },
    {
        id: 17,
        name: "PEN Testing",
        institution: "IT Masters, Charles Sturt University, Australia",
        year: "2025",
    },
    {
        id: 18,
        name: "DevOps",
        institution: "IT Masters, Charles Sturt University, Australia",
        year: "2025",
    },
    {
        id: 19,
        name: "PEN Testing",
        institution: "IT Masters, Charles Sturt University, Australia",
        year: "2025",
    },
    {
        id: 32,
        name: "Blockchain Fundamentals",
        institution: "IT Masters, Charles Sturt University, Australia",
        year: "2025",
    },
    {
        id: 35,
        name: "Next-Gen Network Security",
        institution: "IT Masters, Charles Sturt University, Australia",
        year: "2025",
    },
    {
        id: 21,
        name: "Artificial Intelligence Fundamentals with Capstone Project",
        institution: "IBM Skill Build",
        year: "2024",
    },
    {
        id: 24,
        name: "Complete Data Science and Machine Learning",
        institution: "GeeksforGeeks, India",
        year: "2024-2025",
    },
    {
        id: 25,
        name: "IOS App Development",
        institution: "GeeksforGeeks, India",
        year: "2025",
    },
    {
        id: 27,
        name: "MongoDB",
        institution: "GeeksforGeeks, India",
        year: "2025",
    },
    {
        id: 28,
        name: "System Design",
        institution: "Coding Blocks, India",
        year: "2024-2025",
    },
    {
        id: 30,
        name: "ASP.NET",
        institution: "Scaler Academy, India",
        year: "2025",
    },
    {
        id: 5,
        name: "Core Java",
        institution: "National Institute od Electronics and Information Technology (NIELIT Chennai), India",
        year: "2024",
    },
    {
        id: 8,
        name: "Web Designing",
        institution: "NIELIT Haridwar, India",
        year: "2025",
    },
    {
        id: 9,
        name: "Data Analytics using Power BI",
        institution: "NIELIT Haridwar, India",
        year: "2025",
    },
    {
        id: 10,
        name: "Data Science using Python, Business Intelligence using Power BI & Tableau",
        institution: "NIELIT Lucknow, India",
        year: "2025",
    },
    {
        id: 11,
        name: "Android App Development using Kotlin & Java",
        institution: "NIELIT Lucknow, India",
        year: "2025",
    },
    {
        id: 12,
        name: "Data Analytics using Spreadsheets",
        institution: "NIELIT Gorakhpur, India",
        year: "2025",
    },
    {
        id: 13,
        name: "Introduction to MATLAB and Simulink",
        institution: "NIELIT Calicut, India",
        year: "2025",
    },
    {
        id: 31,
        name: "Game Development using Python",
        institution: "JetBrains, Malta",
        year: "2024",
    },
    {
        id: 34,
        name: "AI Enabled Mobile Apps and Games using Thunkable",
        institution: "JetBrains, Malta",
        year: "2024",
    },
    {
        id: 7,
        name: "DSA, Competitive Programming & Full-Stack Web Development",
        institution: "AlgoZenith, India",
        year: "2025 (Ongoing)",
    },
    {
        id: 6,
        name: "Oracle SQL",
        institution: "Oracle Dev Gym",
        year: "2024",
    },
    {
        id: 26,
        name: "Complete Web Scraping using Python",
        institution: "ParseHub",
        year: "2024",
    },
    {
        id: 29,
        name: "Google Colab",
        institution: "YBI Foundation, India",
        year: "2025",
    },
    {
        id: 33,
        name: "Introduction to NFT",
        institution: "UpGrad, India",
        year: "2025",
    },
    {
        id: 4,
        name: ".NET C# Programming",
        institution: "CITC - Hub of IT, India",
        year: "2025",
    },
];

export const leadershipSkills = [
    {
        id: 0,
        name: "Leadership and Management Course",
        description:
            "Completed a structured leadership and management program from IIENSTITU, Tallinn, Estonia, gaining foundational skills in team coordination, decision-making, and project leadership.",
    },
    {
        id: 1,
        name: "Fundamentals of Entrepreneurship for School Students",
        description:
            "Studied the core principles of entrepreneurship at IIT Madras, including business ideation, innovation, basic finance, and real-world problem-solving for young innovators.",
    },
    {
        id: 3,
        name: "Junior MBA",
        description:
            "Enrolled in the Junior MBA program by Henry Harvin, focusing on leadership, business strategy, communication, and early management skills (awaiting batch assignment).",
    },
    {
        id: 4,
        name: "Certification in Problem Solving",
        description:
            "Received a professional certification in problem-solving from IIENSTITU, developing analytical thinking, structured reasoning, and creative solution-building abilities.",
    },
    {
        id: 5,
        name: "Proven Problem Solver – HCL JIGSAW",
        description:
            "Qualified Round 1 and participated in HCL JIGSAW, India’s premier problem-solving and critical-thinking competition, demonstrating strong logical and reasoning skills.",
    },
    {
        id: 6,
        name: "Proficiency in Multiple Languages",
        description:
            "Demonstrates multilingual proficiency in English, Hindi, Malayalam, German (B2 level), with introductory knowledge of French and basic Arabic communication skills.",
    },
    {
        id: 7,
        name: "Participation in Multiple Academic Olympiads",
        description:
            "Participated in various Olympiads and competitive examinations, including English, Essay Writing, Cyber, Mathematics, and Science, showcasing academic curiosity and commitment.",
    },
    {
        id: 8,
        name: "Qualified ASSET Examination",
        description:
            "Cleared Round 1 of the ASSET Examination and advanced to Round 2, reflecting strong academic capability and conceptual understanding across multiple subjects.",
    },
    {
        id: 9,
        name: "ACER-IBT Examinations",
        description:
            "Participated in ACER-IBT examinations twice and achieved a High Distinction in Science, highlighting academic excellence and advanced subject comprehension.",
    },
    {
        id: 10,
        name: "Team Leader for School Activities",
        description:
            "Served as team leader for numerous school activities, coordinating teams, planning tasks, and guiding peers. Also acted as group leader for the Design Thinking Project, leading the team through ideation, prototyping, and presentation.",
    },
    {
        id: 11,
        name: "Blue Ocean Young Entrepreneur Pitch",
        description:
            "Participated in the Blue Ocean Young Entrepreneur Pitch competition, developing and presenting an innovative business idea with a focus on creativity, strategy, and real-world impact.",
    },
    {
        id: 12,
        name: "Certified by TCS iON",
        description:
            "Completed two TCS iON certification, demonstrating strong tech knowledge and dedication to continuous learning, including high-level performance in computer science modules.",
    },
    {
        id: 13,
        name: "The Pi Quiz, Indian Institute of Management (IIM Indore)",
        description: "Completed The Pi Quiz conducted by the Indian Institute of Management (IIM) Indore, demonstrating strong problem-solving abilities, logical reasoning skills, and analytical thinking."
    },
];

