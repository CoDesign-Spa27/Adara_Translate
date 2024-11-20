"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center 
        w-10 h-10 rounded-full  
        transition-colors duration-300 "
    >
      <motion.div
        key={isDarkMode ? "moon" : "sun"}  
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        exit={{ rotate: -360, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center justify-center w-6 h-6"
      >
        {isDarkMode ? (
          <Moon className="text-gray-300 w-5 h-5" />
        ) : (
          <Sun className="text-gray-500 w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
