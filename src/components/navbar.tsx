"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./theme/mode-toggle";
import { ChevronDown } from "lucide-react";
const navItems = [
  { href: "#hero-section", label: "About" },
  { href: "#benefit", label: "Pricing" },
  { href: "#how-it-works", label: "Contact" },
  { href: "#testimonial", label: "Google Workspace Addon" },
  { href: "#pricing", label: "AI Chatbot" },
];

const dropdownItems = [
  { href: "#feature1", label: "Home" },
  { href: "#feature2", label: "Product" },
  { href: "#feature3", label: "Features" },
  { href: "#feature3", label: "FAQ" },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <motion.header
      onClick={closeMenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`sticky top-0 z-40 w-full p-1 text-black dark:text-white transition-all ease-in ${
        isScrolled
          ? "bg-gray-100 dark:bg-neutral-900"
          : "bg-white dark:bg-neutral-950"
      }`}
    >
      <div className="container flex h-16 items-center justify-between p-3 mx-auto">
        <div className="text-xl font-bold flex items-center"> 
            <img src="/logo.png" alt="logo"  className="w-32 h-32"/> </div>

           
 
        <nav className="hidden lg:flex justify-between items-center space-x-4">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex w-full items-center whitespace-nowrap p-2 hover:text-gray-400 rounded-md"
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="p-2 hover:text-gray-400 rounded-md">
              Others
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-40 bg-white dark:bg-neutral-900 rounded-md shadow-md"
                >
                  {dropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-neutral-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <ModeToggle />
 
        <button
      className="lg:hidden relative w-8 h-8 focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen)}}
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
     
        <span 
          className={`w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
          }`}
        />
     
        <span 
          className={`w-6 h-0.5 bg-current transform transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
     
        <span 
          className={`w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
          }`}
        />
      </div>
    </button>
        {isMenuOpen && (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="absolute top-full left-0 right-0 bg-neutral-100 dark:bg-neutral-950 w-full h-screen shadow-lg lg:hidden z-50"
  >
    <div className="flex flex-col items-start px-6 py-4 space-y-4">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="w-full flex items-center p-3 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg dark:text-white transition-all ease-in-out"
        >
          {item.label}
        </Link>
      ))}

      <div className="flex flex-col w-full space-y-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="flex gap-2 w-full items-center p-3 hover:bg-neutral-200  dark:hover:bg-neutral-800 rounded-lg dark:text-white transition-all ease-in-out "
        >
          Others
          <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          >
          <ChevronDown />
          </motion.div>
        </button>
       
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full bg-neutral-300 dark:bg-neutral-900 rounded-lg shadow-md"
            >
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-all ease-in-out"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </motion.nav>
)}

      </div>
    </motion.header>
  );
}
