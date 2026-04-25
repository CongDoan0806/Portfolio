import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer Intern",
    companyName: "NAB Innovation Centre Vietnam",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed and maintained front-end features using React.js in an enterprise-scale environment.",
      "Implemented responsive UI following business requirements and NAB internal design system.",
      "Participated in weekly meetings with Australian clients to discuss project progress, gather feedback, and validate requirements.",
      "Conducted accessibility testing to ensure compliance with NAB standards.",
      "Produced technical documentation to support development and testing processes.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    companyName: "Enosta Group",
    icon: tesla,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Participated in full-stack development using React.js and Express.js.",
      "Designed and implemented user interfaces with reusable components.",
      "Developed and maintained RESTful APIs supporting core system features.",
      "Collaborated in system design discussions, including database structure and application flow.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Internal Project – NAB",
    description:
      "Enterprise React.js project at NAB Innovation Centre Vietnam. Designed responsive UI aligned with business requirements, built reusable components and custom hooks, wrote unit tests with Jest, and performed accessibility testing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "green-text-gradient",
      },
      {
        name: "accessibility",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "EduGrow",
    description:
      "Full-stack education platform built with Laravel and React.js. Designed UI/UX in Figma, built secure authentication APIs, developed RESTful APIs for core features, and integrated Cloudinary for cloud-based image storage.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "FlashUp",
    description:
      "Full-stack web app built with Express.js and React.js. Integrated Gemini AI for dynamic story generation, Firebase for real-time notifications, and optimized system architecture for performance and scalability.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
