import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import kontrakan from "@/public/kontrakan.png"
import codedadakan from "@/public/codedadakan.png"
import vidLink from "@/public/vidlink.png"

export interface ExperienceItem {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactNode; // If your icon is a React component
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Educations",
    hash: "#educations",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educDatas = [
  {
    title: "Bachelor`s Degree in Information System",
    location: "Universitas Terbuka",
    description:
      "Currently pursuing a Bachelor's Degree in Information Systems through a flexible program tailored for working professionals.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "Associate`s Degree in Computer Engineering.",
    location: "STMIK Profesional Makassar",
    description:
      "Capstone Project : “Design and Development of an IoT-Based Smart Cane for Surface and Obstacle Detection”. GPA : 3.32",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  }
] as const;

export const experiencesData = [
  {
    title: "BackEnd Engineer at Indivara Group",
    location: "Jakarta, Indonesia",
    description: "I designed and implemented features based on user requirements, resolved bugs for optimal performance, and collaborated with frontend developers, QA testers, and business analysts to ensure seamless functionality. I developed unit tests using JUnit, provided guidance to team members, integrated data from multiple sources, and executed deployments using CI/CD pipelines. Additionally, I deployed and managed Amazon EC2 instances to enhance project efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan-2023 - May-2025",
  },
  {
    title: "Freelance BackEnd Engineer at CMS Maju Sejahtera",
    location: "Jakarta, Indonesia",
    description:
      "I developed modules for user management, attendance employee, and e-archive services, implemented JWT-based authorization using Spring Security, and created custom exception handlers to improve error management.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 ( June - August )",
  }
] as const;

export const projectsData = [
  {
    title: "Sewa Kontrakan dot Id",
    description:
      "Developing sewakontrakan.id, a platform to simplify finding rental houses that fit user preferences",
    tags: ["React+Vite", "SpringBoot","Postgres", "Redis", "Cloud Infrastructur", "Object Storage", "CI/CD"],
    imageUrl: kontrakan,
    url:"https://www.sewakontrakan.id/"
  },
  {
    title: "CodeDadakan dot Com",
    description:
      "I created an e-learning website to provide an interactive and accessible platform for online learning.",
    tags: ["Golang", "Java", "Technology"],
    imageUrl: codedadakan,
    url:"https://www.codedadakan.com/"
  },
  {
    title: "Video Downloader Bot",
    description:
      "I built a Telegram bot to download videos from TikTok and Instagram, offering a simple and efficient solution for users",
    tags: ["Golang", "Telegram", "Bot", "REST-API", "S3"],
    imageUrl: vidLink,
    url:"https://t.me/VidLinkDownloadBot"
  },
  {
    title: "BroadCast WhatsApp Bot",
    description:
      "I’m building a Telegram bot in Golang to broadcast messages to WhatsApp using Whatsmeow. (Currently in early development)",
    tags: ["Golang", "Postgres", "WhatsMeow", "Concurrency"],
    imageUrl: vidLink,
    url:"https://t.me/broadcast_wa_bot"
  },
] as const;

export const skillsData = [
  "JAVA",
  "SPRING BOOT",
  "GOLANG",
  "UNIT TEST",
  "PENTAHO",
  "MICROSERVICES",
  "MONOLITH",
  "LINUX OS",
  "REST API",
  "GRPC",
  "JWT",
  "AWS EC2",
  "AWS S3",
  "CLOUD COMPUTING",
  "CI/CD",
  "JENKINS",
  "MINIO",
  "RABBITMQ",
  "MYSQL",
  "POSTGRESQL",
  "SQL SERVER",
  "MONGO-DB",
  "REDIS",
  "KAKFA",
  "ELASTIC-SEARCH",
  "DOCKER",
  "GIT"
] as const;