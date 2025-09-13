import { Certification, Experience, NavItem, PersonalData, Project, Skill } from "./types";
import { BrainCircuit, Cloud, Code, Database, GitMerge, LineChart } from "lucide-react";
import { DockerIcon, PyTorchIcon, PythonIcon, RLangIcon, ScikitLearnIcon, TensorFlowIcon } from "@/components/common/Icons";

export const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const personalData: PersonalData = {
    name: "N. V. Sai Ruthvik Kasi",
    role: "Data Scientist & AI Enthusiast",
    intro: "Crafting intelligent solutions from complex data. I specialize in machine learning, data analysis, and building AI-driven applications.",
    about: "Driven by a passion for uncovering insights from data, I am a meticulous and innovative Data Scientist with a strong foundation in statistical analysis and machine learning. My journey in tech has been fueled by a relentless curiosity and a desire to solve real-world problems.\n\nI thrive in collaborative environments and am dedicated to leveraging my skills in Python, R, and various AI frameworks to build robust models and data-driven products. I am constantly exploring new technologies to stay at the forefront of the ever-evolving field of artificial intelligence.",
    avatar: "https://picsum.photos/seed/avatar1/400/400",
    contact: {
        email: "alex.doe@email.com",
        github: "https://github.com/KasiR07",
        linkedin: "https://linkedin.com/in/sai-r-kasi/",
    }
};

export const experienceData: Experience[] = [
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
        name: "AWS Certified Machine Learning - Specialty",
        issuer: "Amazon Web Services",
        year: "2022",
        link: "#",
    },
    {
        name: "TensorFlow Developer Certificate",
        issuer: "Google",
        year: "2021",
        link: "#",
    },
];
