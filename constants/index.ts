import {
  Brain,
  ReceiptText,
  BookMarked,
  PhoneCall,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";

export const navbar_links = [
  {
    title: "About me",
    Icon: ReceiptText,
    href: "#about-me",
  },
  {
    title: "Skills",
    Icon: Brain,
    href: "#skills",
  },
  {
    title: "Projects",
    Icon: BookMarked,
    href: "#projects",
  },
  {
    title: "Contact me",
    Icon: PhoneCall,
    href: "#contact-me",
  },
];

export const contact_links = [
  {
    name: "facebook",
    Icon: Facebook,
    link: "#facebook",
  },
  {
    name: "linkedin",
    Icon: Linkedin,
    link: "#linkedin",
  },
  {
    name: "gmail",
    Icon: Mail,
    link: "#gmail",
  },
];
export const skills = [
  ["HTML", "CSS", "Tailwind", "Javascript", "Typescript", "NextJS"],
  ["NodeJS", "ExpressJS", "NestJS", "MongoDB", "MySql"],
  ["PostgresSQL", "Prisma", "Git", "Framer Motion"],
];
export const projects = [
  {
    name: "Instagram v2",
    image: "/picture_1.jpeg",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: ["nextjs", "nestjs", "tailwind", "prisma"],
    detail_link: "#",
    web_demo: "#",
  },
  {
    name: "my-blog",
    image: "/picture_2.jpg",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: ["nextjs", "tailwind", "shadcn/ui", "sentry"],
    detail_link: "#",
    web_demo: "#",
  },
  {
    name: "banking",
    image: "/picture_3.jpeg",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: ["nextjs", "nestjs", "mongodb", "prisma"],
    detail_link: "#",
    web_demo: "#",
  },
];

export const colors = [
  "sky-300",
  "pink-300",
  "green-300",
  "yellow-300",
  "red-300",
  "purple-300",
  "blue-300",
  "indigo-300",
  "violet-300",
];

