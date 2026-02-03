

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
    about: "Results-driven professional with a strong foundation in Data Science, backed by hands-on experience in industry, academic research, and real-world projects. My expertise lies in data analytics, visualization, and machine learning, where I work extensively with tools such as Python (Pandas, NumPy, TensorFlow), SQL, Power BI, and Tableau to extract insights and drive meaningful outcomes.\n\nOver the years, I have contributed to impactful projects such as AI-based storytelling using AWS SageMaker and Retrieval-Augmented Generation (RAG), as well as developing a Genre Classification System system that combines data-driven insights with practical applications. These experiences have strengthened my ability to work with structured and unstructured data while solving problems that bridge innovation and practicality.\n\nI identify myself as a Vibe Coder and AI Enthusiast, constantly exploring the rapidly growing domains of Generative AI, Large Language Models, Computer Vision, and Natural Language Processing. I hold two Microsoft certifications and am actively expanding my expertise across AWS, Azure, and Google Cloud Platform, with a goal of building versatile and scalable AI-driven solutions.\n\nAt the heart of my journey, I take pride in being known as “The Data Guy”. I am passionate about working with all forms of data ie. transforming it, analyzing it, and applying it in ways that generate value, uncover opportunities, and create intelligent systems that make a difference.",
    avatar: "https://github.com/KasiR07.png",
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
        company_link: "https://mealvue.online/",
        role: "Full Stack Intern",
        duration: "May 2025 – August 2025",
        description: "Developed a modular admin dashboard using React, TypeScript, and Vite, cutting build time by 40% via component reuse, CI/CD integration, and clean architecture patterns for future-ready CMS or analytics systems. Engineered schema-based validation with React Hook Form using Zod & Yup, cutting form bugs by 65% via controlled inputs, debounced side effects, and modular rule enforcement aligned with object-oriented principles. Built accessible UI using Tailwind CSS & ShadCN UI, applying utility classes, semantic HTML, and break point design, enabling responsive behavior across 15+ screens and supporting cross-platform development on Linux. Isolated frontend logic using hooks and services to boost modularity, maintainability, and onboarding by 30%.",
        location: "Windsor, Canada"
    },
    {
        company: "Sharaf DG",
        company_link: "https://uae.sharafdg.com/",
        role: "Data Analyst Intern",
        duration: "Feb 2024 - Aug 2024",
        description: "Processed 50,000+ energy records using pandas, SQL & Excel, applying data cleaning techniques to reduce raw data errors by 35% & decrease preparation time by 40% for weekly performance & yield reports across regions. Developed over 12 automated ETL pipelines for data engineering to process sensor data from 200+ solar panels, decreasing manual data handling by 85% and enabling 24/7 live updates for energy monitoring dashboards. Designed 30+ Power BI dashboards for data visualization, used weekly by 6 departments, reducing report generation time by 60% and increasing insight visibility on panel efficiency, downtime, and predicted performance. Flagged 40+ system fault patterns with O&M through anomaly detection techniques, reducing downtime by 25%.",
        location: "Dubai, UAE"
    },
    {
        company: "National University of Singapore",
        company_link: "https://nus.edu.sg/",
        role: "Research Intern",
        duration: "July 2023 – November 2023",
        description: "Developed ML pipelines on 100,000+ image-caption pairs using tools & Transformers, leveraging transfer learning to achieve a 20% boost in output accuracy and contribute to a cross-team AI research collaboration. Created a CNN-based genre classifier trained on 5,000+ audio wave forms, reaching 91% test accuracy and enabling integration of audio features into a novel multimodal storytelling framework via supervised learning. Deployed 4 ML models on AWS EC2 and S3 with pipeline orchestration, using containerization and CI/CD to cut setup time by 60% and increase team deployment efficiency across iterations in the research lifecycle. Co-authored a research paper on multimodal AI storytelling, integrating 3 model types across 2 modalities and completing the project ahead of schedule with 100% productivity using cloud computing infrastructure.",
        location: "Singapore"
    },
    {
        company: "Uddeshya (NGO)",
        company_link: "https://uddeshyaindia.org/",
        role: "Web Dev Member",
        duration: "January 2023 – April 2023",
        description: "Constructed a multi-page event site using HTML, CSS, Bootstrap, and JS with responsive UI design, increasing mobile retention by 38%, reducing bounce by 26%, and aligning structure to modular layout practices. Integrated jQuery & AOS for scroll-based transitions on 30+ sections, extending time-on-page by 2.4x via smoother UI animations, interactive effects, and improved UX across mobile and low-bandwidth platforms. Designed UI paths with archive, media gallery, and timeline modules leveraging React.js, increasing engagement by 40% through intuitive navigation, modular design patterns, and optimized signal flow across user routes. Deployed via Vercel CI/CD with GitHub and Next.js, cutting rollbacks by 70% and boosting release confidence.",
        location: "India"
    },
    {
        company: "SmartInternz",
        company_link: "https://smartinternz.com/",
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
        company_link: "https://www.miramaralaqah.com/",
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
        name: "SnowPro Associate: Platform Certification",
        issuer: "Snowflake",
        year: "Dec 2025",
        link: "https://achieve.snowflake.com/5bc72e4c-fe5a-4d1f-b8be-f9a5a87b7960",
    },
    {
        name: "Microsoft Certified: Power Platform Fundamental (PL-900)",
        issuer: "Microsoft",
        year: "Nov 2025",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/NagaVenkataSaiRuthvikKasi-2743/F074E090C9DFCADF?sharingId=5CC3A7AB1EF1A976",
    },
    {
        name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft",
        year: "Oct 2025",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/NagaVenkataSaiRuthvikKasi-2743/D03B0C52092E8533?sharingId=5CC3A7AB1EF1A976",
    },
    {
        name: "Databricks Certified: Generative AI Fundamentals",
        issuer: "Databricks",
        year: "Sept 2025",
        link: "https://credentials.databricks.com/842a69c2-cf5e-4cef-828c-a982ba98fe7d#acc.Libgrm7B",
    },
    {
        name: "Databricks Fundamentals Accreditation",
        issuer: "Databricks",
        year: "Aug 2025",
        link: "#",
        highlight: true,
    },
    {
        name: "Responsible AI with GitHub Copilot",
        issuer: "Microsoft",
        year: "Aug 2025",
        link: "https://learn.microsoft.com/api/achievements/share/en-us/NagaVenkataSaiRuthvikKasi-2743/A4W9WN87?sharingId=5CC3A7AB1EF1A976",
    },
    {
        name: "AWS Educate Introduction to Generative AI",
        issuer: "Amazon Web Services (AWS)",
        year: "Aug 2025",
        link: "https://www.credly.com/badges/96db0deb-b3ea-4158-9c27-0da005949fe3/linked_in_profile",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/NagaVenkataSaiRuthvikKasi-2743/FF65E6B9D85700D4?sharingId=5CC3A7AB1EF1A976",
        highlight: true,
    },
    {
        name: "Career Essentials in Business Analysis by Microsoft",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "https://www.linkedin.com/learning/certificates/76e5bb2de3b5fd7b92a7a15021f84d7a6bf62efd0fed6a91b5dbb65ab5d5cb36?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYG9xmxbITf%2BwnmGXHAlN3Q%3D%3D",
    },
    {
        name: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Deloitte",
        year: "Jul 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_WsT3Jp2TTnFTZH5hu_1752197922907_completion_certificate.pdf",
    },
    {
        name: "Introduction to end-to-end analytics using Microsoft Fabric",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "https://learn.microsoft.com/api/achievements/share/en-us/NagaVenkataSaiRuthvikKasi-2743/XQGD27EY?sharingId=5CC3A7AB1EF1A976",
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
        link: "https://credentials.nus.edu.sg/1f3bc135-fbd5-4c3f-91fa-f5808b090d0f",
    },
    {
        name: "Microsoft Certified: Security, Compliance and Identity Fundamentals",
        issuer: "Microsoft",
        year: "Jul 2023",
        link: "https://www.credly.com/badges/4dc8aa28-05ce-46dd-bf05-81bdb769c99d/linked_in_profile",
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



    

    




    