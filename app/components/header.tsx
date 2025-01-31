"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>

      <nav className="flex fixed top-[0.5rem] left-1/2 -translate-x-1/2 py-2">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-3 text-[1rem] font-semibold text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-2 transition-all rounded-full hover:text-gray-900 dark:hover:text-gray-200", 
                  {
                    "text-white bg-gray-800 dark:bg-gray-700 shadow-md":
                      activeSection === link.name,
                    "dark:text-gray-400": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
