import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const designElements = {
  dottedFire: "/svg/dotted_fire.svg",
  dottedCircle: "/svg/dotted_circle.svg",
  star: "/svg/star.svg",
};

export const stats = [
  {
    figure: "+1",
    name: (
      <p>
        Year of <br /> Experience
      </p>
    ),
  },
  {
    figure: "+3",
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
    companyName: "Freelancing",
    summary:
      "Developed and deployed secure web app from scratch, both on client and server side with aim of improving user experiences and user engagement.",
    year: "February 2024 - Present",
  },
  {
    companyName: "EL Academy",
    summary:
      "Developed and implemented comprehensive curriculum to teach full stack development technologies to 50+ students. Implemented customized lesson plans tailored to individual learning styles.Utilized real-world projects to engage students in hands-on learning experiences.",
    year: "January 2023 - February 2024",
  },
];

export const projects = [
  {
    name: "YCA",
    description: "SaaS Application",
    image: "/images/yca.png",
    link: "https://youtube-comment-analyser.vercel.app/",
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
    id: 3,
    icon: <FaInstagram size={20} />,
    link: "https://www.instagram.com/s.e.o_17/",
  },
  {
    id: 4,
    icon: <MdEmail size={20} />,
    link: "mailto: ebenmosi17@gmail.com",
  },
];
