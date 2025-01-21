import { motion } from "framer-motion";
import { AnimationProps } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  label: string;
  variants: AnimationProps["variants"];
};

const SkillImage = ({ src, alt, label, variants }: Props) => {
  return (
    <motion.div
      className="p-4 flex flex-col justify-center items-center md:w-[130px] w-[100px]"
      variants={variants}
    >
      <img src={src} alt={alt} className="h-8 md:h-10 mb-2" />
      <div className="text-xs text-stone-800 dark:text-stone-300">{label}</div>
    </motion.div>
  );
};

export default SkillImage;
