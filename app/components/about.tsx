"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Associate’s Degree in Computer Engineering, working for an IT vendor supporting a major insurance company. Experienced in Java and Golang, RESTful APIs, payment processing, and claims management. Strong understanding of microservices, cloud infrastructure, CI/CD, and security best practices. Also familiar with systems programming concepts such as memory management and concurrency. Fast learner with a problem-solving mindset, passionate about building efficient, scalable, and secure backend systems in an agile environment.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing guitar and piano.
      </p>
    </motion.section>
  );
}