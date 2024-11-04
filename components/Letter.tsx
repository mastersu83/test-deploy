import { motion } from "framer-motion";
import styles from "./letter.module.css";

interface ILetter {
  letter: any;
  delay: number;
  color: boolean;
}

export const Letter = ({ letter, delay, color }: ILetter) => {
  return (
    <div>
      <motion.div
        style={{
          color: color ? "#ff0000" : "#00a0e4",
        }}
        className={!color ? styles.text3dDiora : styles.text3dKids}
        animate={{ rotateY: 360 }}
        transition={{
          delay,
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8,
          type: "spring",
          repeatType: "loop",
        }}
      >
        {letter}
      </motion.div>
    </div>
  );
};
