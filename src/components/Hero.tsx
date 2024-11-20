"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./container";
import { fadeInAnimationByIndex } from "../lib/animation";
import { BackgroundBeamsWithCollision } from "./ui/bg-beams";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <div
        id="hero-section"
        className="relative flex items-center w-full overflow-hidden"
      >
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-50 dark:opacity-30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-no-repeat bg-center bg-contain pattern-lines opacity-40" />
        </motion.div>

        <Container>
          <div className="z-10 flex flex-col w-full text-black dark:text-white sm:items-center">
            <motion.h1
              className="max-w-[400px] text-4xl font-bold text-left sm:max-w-[1300px] sm:text-center sm:text-7xl text-balance"
              variants={fadeInAnimationByIndex}
              initial="initial"
              animate={fadeInAnimationByIndex.animate(0)}
            >
              Introducing Adara
              <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                Translate
              </span>
            </motion.h1>

            <motion.p
              className="max-w-[700px] mt-6 text-md sm:text-xl text-left sm:text-center text-text-secondary-dark"
              variants={fadeInAnimationByIndex}
              initial="initial"
              animate={fadeInAnimationByIndex.animate(2)}
            >
              Unleashing the power of AI with multi-platform translation
              services featuring DeepL, Google, Microsoft, and GPT-4o.
            </motion.p>
        
            <motion.div
              variants={fadeInAnimationByIndex}
              initial="initial"
              animate={fadeInAnimationByIndex.animate(3)}
              className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row"
            >
              <Button label="Get Started"
              size={"large"}
              />
               <Button label="Learn More" 
               size={"large"}
               variant={"secondary"} />
            </motion.div>

          
            <motion.div
              variants={fadeInAnimationByIndex}
              initial="initial"
              animate={fadeInAnimationByIndex.animate(3)}
              className="flex flex-col items-center justify-center w-full gap-4  sm:flex-row"
            ></motion.div>
          </div>
          <motion.div
          className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-50"
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50"
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
        </Container>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
