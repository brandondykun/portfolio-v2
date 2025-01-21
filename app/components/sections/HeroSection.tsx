"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const container = {
    hidden: {
      opacity: 1,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { translateY: 40, opacity: 0 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      className="h-screen p-4 sm:pl-[10vw] relative"
      id="home"
      whileInView={["hidden", "show"]}
      initial="hidden"
      variants={container}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl mt-[30vh] md:text-6xl sm:text-5xl font-bold text-center sm:text-left"
        variants={item}
      >
        Brandon Dykun
      </motion.h2>
      <motion.div
        className="text-xl md:text-4xl sm:text-2xl pt-2 pb-16 text-stone-500 font-thin text-center sm:text-left"
        variants={item}
      >
        Full Stack Software Engineer
      </motion.div>
      <div className="flex justify-center sm:justify-start gap-4">
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.7,
          }}
        >
          <Button variant="green" className="w-28">
            Contact
          </Button>
        </motion.a>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.7,
          }}
        >
          <Button variant="default" className="w-28">
            About
          </Button>
        </motion.a>
      </div>
      <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-solid border-accent h-12 w-12"></div>
    </motion.section>
  );
};

export default HeroSection;
