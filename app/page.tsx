"use client";

import styles from "./page.module.css";
import { Letter } from "@/components/Letter";
import { letters } from "@/consts/letters";
import Marquee from "react-fast-marquee";

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
        <Marquee
          speed={100}
          style={{ display: "flex", alignItems: "start", height: "100%" }}
        >
          <div className={styles.description}>
            На сайте проводятся работы по ребрендингу
          </div>
        </Marquee>
      </main>
    </div>
  );
}
