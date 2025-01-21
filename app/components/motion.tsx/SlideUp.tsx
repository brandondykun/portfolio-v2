"use client";

import { motion } from "framer-motion";

type Props = {
  delay?: number;
  duration?: number;
  distance?: number;
  children: React.ReactNode;
};

const SlideUp = ({
  delay = 0,
  duration = 0.5,
  distance = 50,
  children,
}: Props) => {
  return (
    <motion.div
      initial={{ translateY: distance, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeOut",
        duration: duration,
        delay: delay,
        // type: "spring",
        // damping: 200,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
