import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    MessageSquareCode,
    MousePointer2,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

import PROJECT_IMG_1 from "../assets/images/project-1.JPG";
import PROJECT_IMG_2 from "../assets/images/project-2.JPG";
import PROJECT_IMG_3 from "../assets/images/project-3.JPG";
import PROJECT_IMG_4 from "../assets/images/project-4.PNG";
import { image, label } from "framer-motion/client";
import { number } from "framer-motion";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500"},
            { name: "TypeScript", level: 90, color: "bg-blue-600"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
        ],
    },
    
    {
        title: "Backend",
        icon: Server,
        description: "Building eme interfaces",
        skills: [
            { name: "Node.js", level: 95, color: "bg-blue-500"},
            { name: "TypeScript", level: 90, color: "bg-blue-600"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
        ],
    },

    {
        title: "Database",
        icon: Server,
        description: "Building DB interfaces",
        skills: [
            { name: "Node.js", level: 95, color: "bg-blue-500"},
            { name: "TypeScript", level: 90, color: "bg-blue-600"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
        ],
    },    
];

export const TECH_STACK = [
    "Vite",
    "Git & GitHub",
    "Vercel",
    "VS Code",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "Notion",
    "Slack",
];

export const STATS = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100+", label: "Client Satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Pondr",
        description: "An intentional dating app",
        image: PROJECT_IMG_4,
        tags: ["Figma", "Miro", "Adobe PhotoShop"],
        liveUrl: "https://youtu.be/V5bVtAej1hs?si=kv8yXVznnTqGq7_I",
        githubUrl: "#",
        featured: true,
        category: "UI/UX",
    },
    {
        id: 2,
        title: "React Memory Game",
        description: "A mini project created in React",
        image: PROJECT_IMG_1,
        tags: ["React", "Node.js", "Tailwind"],
        liveUrl: "https://youtu.be/V5bVtAej1hs?si=kv8yXVznnTqGq7_I",
        githubUrl: "#",
        featured: true,
        category: "Front End",
    },
    {
        id: 3,
        title: "OTC Website",
        description: "Web design created for OTC company",
        image: PROJECT_IMG_2,
        tags: ["Figma", "Webflow", "Tailwind"],
        liveUrl: "https://youtu.be/V5bVtAej1hs?si=kv8yXVznnTqGq7_I",
        githubUrl: "#",
        featured: true,
        category: "UI/UX",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2018",
        title: "Started web development",
        company: "Tuitt Philippines Inc.",
        description: "Intensive Coding Bootcamp",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2019",
        title: "Continued coding journey",
        company: "MNK.Soft Corporation",
        description: "Junior Programmer",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2021",
        title: "Front-end with design experience",
        company: "ConnectWise, LLC",
        description: "Front End Web Engineer",
        icon: MessageSquareCode,
        color: "bg-teal-500",
    },
        {
        year: "2025",
        title: "Exploring UI/UX Design",
        company: "Freelance",
        description: "Design Intern",
        icon: MousePointer2,
        color: "bg-cyan-500",
    },    
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "shhhhhhhhhhhhhh",
    },
        {
        icon: Coffee,
        title: "Problem Solving",
        description: "nahhhhhhhhhhhhhh",
    },
        {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "grrrrrrrrrrrrrrr",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/judypontiveros",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-800/10",
    },
    {
        name: "Behance",
        icon: FaBehance,
        url: "https://www.behance.net/japnti",
        color: "hover:text-teal-400",
        bgColor: "hover:bg-teal-800/10",
    },
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/ponjudya",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:judy.pontiveros@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-800/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Philippines",
    },
    {
        icon: Mail,
        label: "Email",
        value: "judy.pontiveros@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+639994704735",
    },
];
