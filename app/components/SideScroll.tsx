"use client";

import { motion, useScroll } from "framer-motion";

const ProgressCircle = () => {
  return (
    <div className="h-[13px] w-[13px] border-solid border-[4px] border-green-500 rounded-[50%] z-10"></div>
  );
};

const SideScroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="h-[400px] flex flex-col items-center absolute"
      initial={{ height: "0px" }}
      whileInView={{ height: "400px" }}
      viewport={{ once: true }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
    >
      <motion.div
        className="absolute w-[3px] top-0 bottom-0 inset-y-0 bg-accent origin-[-50%]"
        style={{ scaleY: scrollYProgress, originY: 0 }}
      />
      <div className="flex-1 w-[3px] bg-stone-400 dark:bg-stone-700"></div>
    </motion.div>
  );
};

export default SideScroll;
