import { Certification, Experience, NavItem, PersonalData, Project, Skill } from "./types";
import { BrainCircuit, Cloud, Code, Database, GitMerge, LineChart } from "lucide-react";
import { DockerIcon, PyTorchIcon, PythonIcon, RLangIcon, ScikitLearnIcon, TensorFlowIcon } from "@/components/common/Icons";

export const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const personalData: PersonalData = {
    name: "N. V. Sai Ruthvik Kasi",
    role: "Data Scientist & AI Enthusiast",
    intro: "Crafting intelligent solutions from complex data. I specialize in machine learning, data analysis, and building AI-driven applications.",
    about: "Driven by a passion for uncovering insights from data, I am a meticulous and innovative Data Scientist with a strong foundation in statistical analysis and machine learning. My journey in tech has been fueled by a relentless curiosity and a desire to solve real-world problems.\n\nI thrive in collaborative environments and am dedicated to leveraging my skills in Python, R, and various AI frameworks to build robust models and data-driven products. I am constantly exploring new technologies to stay at the forefront of the ever-evolving field of artificial intelligence.",
    avatar: "https://picsum.photos/seed/avatar1/400/400",
    contact: {
        email: "sairkasi792@gmail.com",
        github: "https://github.com/KasiR07",
        linkedin: "https://linkedin.com/in/sai-r-kasi/",
    }
};

export const experienceData: Experience[] = [
    {
        company: "Sharaf DG",
        company_link: "#",
        role: "Data Analyst Intern",
        duration: "Feb 2024 - Aug 2024",
        description: "Processed 50,000+ energy records using pandas, SQL & Excel, applying data cleaning techniques to reduce raw data errors by 35% & decrease preparation time by 40% for weekly performance & yield reports across regions. Developed over 12 automated ETL pipelines for data engineering to process sensor data from 200+ solar panels, decreasing manual data handling by 85% and enabling 24/7 live updates for energy monitoring dashboards. Designed 30+ Power BI dashboards for data visualization, used weekly by 6 departments, reducing report generation time by 60% and increasing insight visibility on panel efficiency, downtime, and predicted performance. Flagged 40+ system fault patterns with O&M through anomaly detection techniques, reducing downtime."
    },
    {
        company: "Innovate AI",
        company_link: "#",
        role: "Senior Data Scientist",
        duration: "Jan 2021 - Present",
        description: "Led a team to develop a novel recommendation engine, increasing user engagement by 25%. Designed and implemented NLP models for sentiment analysis on customer feedback, providing actionable insights to the product team."
    },
    {
        company: "Data Insights Corp.",
        company_link: "#",
        role: "Data Scientist",
        duration: "Jun 2018 - Dec 2020",
        description: "Built predictive models to forecast sales trends with 95% accuracy. Conducted A/B testing and statistical analysis to optimize marketing campaigns, resulting in a 15% increase in conversion rates."
    },
    {
        company: "Tech Solutions Ltd.",
        company_link: "#",
        role: "Junior Data Analyst",
        duration: "Jul 2016 - May 2018",
        description: "Cleaned and processed large datasets to support the data science team. Created dashboards and visualizations to communicate key metrics to stakeholders."
    },
];

export const projectsData: Project[] = [
    {
        id: "1",
        name: "Customer Churn Prediction",
        description: "A machine learning model to predict customer churn for a subscription-based service, enabling proactive retention strategies.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        image: "https://picsum.photos/seed/proj1/600/400",
        link: "#",
    },
    {
        id: "2",
        name: "Real-time Sentiment Analysis",
        description: "An application that analyzes social media streams in real-time to gauge public sentiment about specific topics.",
        technologies: ["Python", "TensorFlow", "NLTK", "Flask"],
        image: "https://picsum.photos/seed/proj2/600/400",
        link: "#",
    },
    {
        id: "3",
        name: "Image Recognition for Retail",
        description: "A deep learning model that identifies products on shelves from images, helping automate inventory management.",
        technologies: ["PyTorch", "OpenCV", "Convolutional Neural Networks"],
        image: "https://picsum.photos/seed/proj3/600/400",
        link: "#",
    },
    {
        id: "4",
        name: "Financial Market Forecasting",
        description: "Time-series analysis and LSTM-based models to predict stock market movements and inform investment strategies.",
        technologies: ["R", "Keras", "Quantitative Analysis"],
        image: "https://picsum.photos/seed/proj4/600/400",
        link: "#",
    },
];

export const skillsData: Skill[] = [
    { name: "Python", icon: <PythonIcon /> },
    { name: "R", icon: <RLangIcon /> },
    { name: "SQL", icon: <Database /> },
    { name: "PyTorch", icon: <PyTorchIcon /> },
    { name: "TensorFlow", icon: <TensorFlowIcon /> },
    { name: "Scikit-learn", icon: <ScikitLearnIcon /> },
    { name: "AWS", icon: <Cloud /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Git", icon: <GitMerge /> },
    { name: "MLOps", icon: <BrainCircuit /> },
    { name: "Data Viz", icon: <LineChart /> },
    { name: "API Dev", icon: <Code /> },
];

export const certificationsData: Certification[] = [
    {
        name: "Databricks Fundamentals Accreditation",
        issuer: "Databricks",
        year: "Aug 2025",
        link: "#",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        year: "Jul 2025",
        link: "#",
    },
    {
        name: "Data Science: Advanced Excel and Power BI",
        issuer: "Government of Dubai",
        year: "Aug 2024",
        link: "#",
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
    },
];
