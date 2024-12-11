import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { LuHome } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

export const navItems = [
  {
    name: "Home",
    icon: <LuHome size={20} />,
    link: "/",
  },
  {
    name: "Experience",
    icon: <RiSuitcaseLine size={20} />,
    link: "#experience",
  },
  {
    name: "Projects",
    icon: <FaRegFolder size={20} />,
    link: "#projects",
  },
  {
    name: "Contact",
    icon: <FaRegMessage size={20} />,
    link: "#contact",
  },
];

export const designElements = {
  dottedFire: "/svg/dotted_fire.svg",
  dottedCircle: "/svg/dotted_circle.svg",
  star: "/svg/star.svg",
};

export const stats = [
  {
    figure: "+2",
    name: (
      <p>
        Year of <br /> Experience
      </p>
    ),
  },
  {
    figure: "+4",
    name: (
      <p>
        Projects <br /> Completed
      </p>
    ),
  },
  {
    figure: "+400",
    name: (
      <p>
        Hours of <br /> Coding
      </p>
    ),
  },
];

export const experiences = [
  {
    companyName: "Empowered Future",
    summary:
      "Collaborating with UI/UX designers to build responsive, functional interfaces and ensure smooth frontend-backend integration. Conducting code reviews, and contributed to new feature development while mastering the existing codebase.",
    year: "September 2024 - Present",
  },
  {
    companyName: "EL Academy",
    summary:
      "A results-driven Software Engineering Instructor with a proven track record of enhancing student learning through project-based instruction in technologies like HTML, CSS, JavaScript, PHP, and Python. At EL Academy in Abuja, Nigeria, I increased student retention by 80%, improved technical skills, and supported organizational goals through innovative teaching methods and operational support.",
    year: "January 2023 - February 2024",
  },
];

export const projects = [
  {
    name: "Flashcard App",
    description: "Flashcard Saas AI",
    image: "/images/flashcard.png",
    link: "https://flashcard-saas-ai.vercel.app/",
  },
  {
    name: "ChatBot",
    description: "AI RAG Chatbot Application",
    image: "/images/customer-support.png",
    link: "https://customer-support-ai-theta.vercel.app/",
  },
  {
    name: "YCA",
    description: "SaaS Application",
    image: "/images/yca.png",
    link: "https://yca-ecru.vercel.app/",
  },
  {
    name: "Chat App",
    description: "Web Application",
    image: "/images/chat-app.jpg",
    link: "https://github.com/seo17/pern-chat-app",
  },
  {
    name: "JOBSCO",
    description: "Web Application",
    image: "/images/jobsco.png",
    link: "https://github.com/seo17/job-portal-nextjs",
  },
];

export const toolsStack = [
  {
    name: "",
    description: "",
    image: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FaGithub size={20} />,
    link: "https://github.com/seo17",
  },
  {
    id: 2,
    icon: <FaLinkedinIn size={20} />,
    link: "https://www.linkedin.com/in/samuel-owolabi-a5243225b",
  },
  {
    id: 4,
    icon: <MdEmail size={20} />,
    link: "mailto: ebenmosi17@gmail.com",
  },
];

type ContactInput = {
  name: string;
  label: string;
  prompt: string;
  type: "text" | "email" | "textbox";
};

export const contactFormInputInfo: ContactInput[] = [
  {
    name: "name",
    label: "Name",
    prompt: "Your Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    prompt: "Your@email.com",
    type: "email",
  },
  {
    name: "message",
    label: "Message",
    prompt: "Message",
    type: "textbox",
  },
];
