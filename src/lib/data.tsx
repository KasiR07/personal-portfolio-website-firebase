

import { Certification, Experience, NavItem, PersonalData, CategorizedSkill, Education } from "./types";
import { BrainCircuit, Cloud, Code, Database, GitMerge, LineChart, Cpu, GanttChartSquare, Briefcase, BotMessageSquare, Workflow, Users, Settings, Terminal, Video, FileCog, FileSpreadsheet, GraduationCap } from "lucide-react";
import { DockerIcon, PyTorchIcon, PythonIcon, RLangIcon, ScikitLearnIcon, TensorFlowIcon, FigmaIcon } from "@/components/common/Icons";

export const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Contact", href: "#contact" },
];

export const personalData: PersonalData = {
    name: "N. V. Sai Ruthvik Kasi",
    role: "Data Scientist, AI Enthusiast, Vibe Coder",
    intro: "A dedicated and detail-oriented professional with a passion for leveraging data to drive impactful business solutions.",
    about: "Driven by a passion for uncovering insights from data, I am a meticulous and innovative Data Scientist with a strong foundation in statistical analysis and machine learning. My journey in tech has been fueled by a relentless curiosity and a desire to solve real-world problems.\n\nI thrive in collaborative environments and am dedicated to leveraging my skills in Python, R, and various AI frameworks to build robust models and data-driven products. I am constantly exploring new technologies to stay at the forefront of the ever-evolving field of artificial intelligence.",
    avatar: "/kasi-aws.jpeg",
    contact: {
        email: "sairkasi792@gmail.com",
        github: "https://github.com/KasiR07",
        linkedin: "https://linkedin.com/in/sai-r-kasi/",
        instagram: "https://www.instagram.com/kasi_ruthvik07/",
    }
};

export const educationData: Education[] = [
    {
        school: "University of Windsor",
        degree: "Masters in Applied Computing with specialization in AI",
        duration: "Sept 2024 - May 2026",
        location: "Windsor, Canada",
    },
    {
        school: "Vellore Institute of Technology, Vellore",
        degree: "Bachelors of Technology in Computer Science Core",
        duration: "Sept 2020 - Aug 2024",
        location: "Vellore, India",
    },
    {
        school: "GEMS Our Own English High School",
        degree: "High School (Class 1-12)",
        duration: "",
        location: "Dubai, UAE"
    }
];

export const experienceData: Experience[] = [
    {
        company: "MealLens Inc",
        company_link: "#",
        role: "Full Stack Intern",
        duration: "May 2025 – August 2025",
        description: "Developed a modular admin dashboard using React, TypeScript, and Vite, cutting build time by 40% via component reuse, CI/CD integration, and clean architecture patterns for future-ready CMS or analytics systems. Engineered schema-based validation with React Hook Form using Zod & Yup, cutting form bugs by 65% via controlled inputs, debounced side effects, and modular rule enforcement aligned with object-oriented principles. Built accessible UI using Tailwind CSS & ShadCN UI, applying utility classes, semantic HTML, and break point design, enabling responsive behavior across 15+ screens and supporting cross-platform development on Linux. Isolated frontend logic using hooks and services to boost modularity, maintainability, and onboarding by 30%.",
        location: "Windsor, Canada"
    },
    {
        company: "Sharaf DG",
        company_link: "#",
        role: "Data Analyst Intern",
        duration: "Feb 2024 - Aug 2024",
        description: "Processed 50,000+ energy records using pandas, SQL & Excel, applying data cleaning techniques to reduce raw data errors by 35% & decrease preparation time by 40% for weekly performance & yield reports across regions. Developed over 12 automated ETL pipelines for data engineering to process sensor data from 200+ solar panels, decreasing manual data handling by 85% and enabling 24/7 live updates for energy monitoring dashboards. Designed 30+ Power BI dashboards for data visualization, used weekly by 6 departments, reducing report generation time by 60% and increasing insight visibility on panel efficiency, downtime, and predicted performance. Flagged 40+ system fault patterns with O&M through anomaly detection techniques, reducing downtime by 25%.",
        location: "Dubai, UAE"
    },
    {
        company: "National University of Singapore",
        company_link: "#",
        role: "Research Intern",
        duration: "July 2023 – November 2023",
        description: "Developed ML pipelines on 100,000+ image-caption pairs using tools & Transformers, leveraging transfer learning to achieve a 20% boost in output accuracy and contribute to a cross-team AI research collaboration. Created a CNN-based genre classifier trained on 5,000+ audio wave forms, reaching 91% test accuracy and enabling integration of audio features into a novel multimodal storytelling framework via supervised learning. Deployed 4 ML models on AWS EC2 and S3 with pipeline orchestration, using containerization and CI/CD to cut setup time by 60% and increase team deployment efficiency across iterations in the research lifecycle. Co-authored a research paper on multimodal AI storytelling, integrating 3 model types across 2 modalities and completing the project ahead of schedule with 100% productivity using cloud computing infrastructure.",
        location: "Singapore"
    },
    {
        company: "Uddeshya (NGO)",
        company_link: "#",
        role: "Web Dev Member",
        duration: "January 2023 – April 2023",
        description: "Constructed a multi-page event site using HTML, CSS, Bootstrap, and JS with responsive UI design, increasing mobile retention by 38%, reducing bounce by 26%, and aligning structure to modular layout practices. Integrated jQuery & AOS for scroll-based transitions on 30+ sections, extending time-on-page by 2.4x via smoother UI animations, interactive effects, and improved UX across mobile and low-bandwidth platforms. Designed UI paths with archive, media gallery, and timeline modules leveraging React.js, increasing engagement by 40% through intuitive navigation, modular design patterns, and optimized signal flow across user routes. Deployed via Vercel CI/CD with GitHub and Next.js, cutting rollbacks by 70% and boosting release confidence.",
        location: "India"
    },
    {
        company: "SmartInternz",
        company_link: "#",
        role: "Data Analyst Intern",
        duration: "May 2023 – July 2023",
        description: "Engineered a full-stack analytics platform for NYC bike data using React.js and Flask, enabling live query processing, API routing, and client-side interactivity for multi-dimensional data exploration across 100K+ records. Analyzed trip logs using Python & Tableau to extract hourly usage trends, station-wise output, and demographic segmentation, improving visual precision by 38% via data preprocessing, filtering layers, and aggregate metrics. Integrated Tableau dashboards into the app interface for rendering, applying live data filtering and backend triggers to automate data refresh cycles, improving analytical response time by 45% during multi-slice queries. Deployed front-end components for station-wise analysis, connecting to Flask endpoints for asynchronous rendering and map-based metrics display, advancing mobility trend inputs by 40% using geographic data alignment.",
        location: "Remote"
    },
    {
        company: "BOTCeption (Startup)",
        company_link: "#",
        role: "Software Dev Intern",
        duration: "October 2021 – January 2022",
        description: "Implemented responsive apps using HTML, CSS, JS & Bootstrap across 20+ devices, reducing UI bugs 50% by fixing pixel misalignments, adjusting viewports, and QA testing in Linux-based development environments. Constructed async API integrations via Node.js & PHP REST routes, boosting backend connectivity by 35% using modular route separation, error handling, and clean JSON parsing for structured system integration. Leveraged MongoDB for data operations across 3+ modules, cutting query latency 25% by indexing keys, applying schema validations, and designing optimized collection structures with embedded logs & projections. Debugged frontend bottlenecks using Vite, cut load by 2.3s, improved Lighthouse via tests, compression, & defer.",
        location: "Remote"
    },
    {
        company: "Miramar Al Aqah Beach Resort",
        company_link: "#",
        role: "Database Administrator",
        duration: "Dec 2018 - Jan 2019",
        description: "During my time at Miramar, I was responsible for managing and maintaining internal databases that tracked customer interactions, sales transactions, and inventory records. I regularly updated records to ensure accuracy and consistency, which played a critical role in supporting smooth day-to-day operations. My role involved routine data validation, performing error checks, and resolving discrepancies to uphold data integrity. I collaborated closely with the operations and finance teams to generate reports for performance tracking and business decision-making. I used tools like Microsoft Excel and basic SQL queries to extract, clean, and analyze data. Additionally, I assisted in implementing regular backup procedures and supported data privacy compliance efforts.",
        location: "Fujairah Emirate, United Arab Emirates"
    }
];

export const skillsData: CategorizedSkill[] = [
    {
        category: "Programming & Scripting",
        skills: [
            { name: "Python", icon: <PythonIcon /> },
            { name: "R", icon: <RLangIcon /> },
            { name: "SQL", icon: <Database /> },
            { name: "Java", icon: <Code /> },
            { name: "JavaScript", icon: <Code /> },
            { name: "Linux", icon: <Terminal /> },
        ]
    },
    {
        category: "Databases & Querying",
        skills: [
            { name: "MySQL", icon: <Database /> },
            { name: "PostgreSQL", icon: <Database /> },
            { name: "MongoDB", icon: <Database /> },
            { name: "Snowflake", icon: <Database /> },
            { name: "Neo4j", icon: <Database /> },
            { name: "Spark", icon: <Cpu /> },
            { name: "Hadoop", icon: <Database /> },
        ]
    },
    {
        category: "Machine Learning & AI",
        skills: [
            { name: "Scikit-learn", icon: <ScikitLearnIcon /> },
            { name: "TensorFlow", icon: <TensorFlowIcon /> },
            { name: "PyTorch", icon: <PyTorchIcon /> },
            { name: "NLP", icon: <BotMessageSquare /> },
            { name: "OpenCV", icon: <Code /> },
            { name: "Computer Vision", icon: <Video /> },
            { name: "Generative AI", icon: <BrainCircuit /> },
        ]
    },
    {
        category: "Gen AI & LLMs",
        skills: [
            { name: "Prompt Engineering", icon: <Settings /> },
            { name: "RAG", icon: <BrainCircuit /> },
            { name: "AI Agents", icon: <BotMessageSquare /> },
            { name: "OpenAI", icon: <BrainCircuit /> },
            { name: "Hugging Face", icon: <Cpu /> },
            { name: "Copilot", icon: <BotMessageSquare /> },
        ]
    },
    {
        category: "Data Pipelines & Ops",
        skills: [
            { name: "ETL", icon: <Workflow /> },
            { name: "DataOps", icon: <Settings /> },
            { name: "MLOps", icon: <FileCog /> },
            { name: "Feature Engineering", icon: <Cpu /> },
        ]
    },
    {
        category: "Cloud Platforms",
        skills: [
            { name: "AWS", icon: <Cloud /> },
            { name: "Azure", icon: <Cloud /> },
            { name: "GCP", icon: <Cloud /> },
            { name: "MS Fabric", icon: <Cloud /> },
        ]
    },
    {
        category: "Web Frameworks & Libraries",
        skills: [
            { name: "React.js", icon: <Code /> },
            { name: "HTML", icon: <Code /> },
            { name: "CSS", icon: <Code /> },
            { name: "JavaFX", icon: <Code /> },
            { name: "Three.js", icon: <Code /> },
            { name: "D3.js", icon: <LineChart /> },
        ]
    },
    {
        category: "Platforms & Tools",
        skills: [
            { name: "Power BI", icon: <LineChart /> },
            { name: "Tableau", icon: <LineChart /> },
            { name: "Git", icon: <GitMerge /> },
            { name: "Docker", icon: <DockerIcon /> },
            { name: "Jira", icon: <GanttChartSquare /> },
            { name: "SAS", icon: <Code /> },
            { name: "Excel", icon: <FileSpreadsheet /> },
            { name: "Figma", icon: <FigmaIcon /> },
        ]
    },
    {
        category: "Business & Project Management",
        skills: [
            { name: "Business Analysis", icon: <Briefcase /> },
            { name: "Project Management", icon: <GanttChartSquare /> },
            { name: "Agile", icon: <Users /> },
            { name: "Scrum", icon: <Users /> },
        ]
    }
];

export const certificationsData: Certification[] = [
    {
        name: "Databricks Fundamentals Accreditation",
        issuer: "Databricks",
        year: "Aug 2025",
        link: "#",
        highlight: true,
    },
    {
        name: "AWS Educate Introduction to Generative AI",
        issuer: "Amazon Web Services (AWS)",
        year: "Aug 2025",
        link: "#",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "#",
        highlight: true,
    },
    {
        name: "Career Essentials in Business Analysis by Microsoft",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "#",
    },
    {
        name: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Deloitte",
        year: "Jul 2025",
        link: "#",
    },
    {
        name: "Introduction to end-to-end analytics using Microsoft Fabric",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "#",
    },
    {
        name: "Data Science: Advanced Excel and Power BI",
        issuer: "Government of Dubai",
        year: "Aug 2024",
        link: "#",
        highlight: true,
    },
    {
        name: "AWS Certified: Data Analytics with Big Data",
        issuer: "AWS",
        year: "Jul 2023",
        link: "#",
    },
    {
        name: "Data Analytics with Deep Learning",
        issuer: "National University of Singapore (NUS)",
        year: "Jul 2023",
        link: "#",
    },
    {
        name: "Microsoft Certified: Security, Compliance and Identity Fundamentals",
        issuer: "Microsoft",
        year: "Jul 2023",
        link: "#",
        highlight: true,
    },
    {
        name: "Academic Excellence (94% in CBSE Boards)",
        issuer: "GEMS Our Own English High School, Fujairah",
        year: "Apr 2020",
        link: "#",
        highlight: true,
    },
];
