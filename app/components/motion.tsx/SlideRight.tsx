"use client";

import { motion } from "framer-motion";

type Props = {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

const SlideRight = ({ delay = 0, duration = 0.5, children }: Props) => {
  return (
    <motion.div
      initial={{ translateX: -40, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: duration,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideRight;
