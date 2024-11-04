"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Letter } from "@/components/Letter";
import { letters } from "@/consts/letters";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.brand}>
          {letters.map((letter, i) => (
            <Letter
              key={letter.id}
              delay={letter.delay}
              letter={letter.name}
              color={letter.color}
            />
          ))}
        </div>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={styles.description}
        >
          На сайте проводятся работы по ребрендингу, доступ будет восстановлен в
          ближайшее время
        </motion.div>
      </main>
    </div>
  );
}
