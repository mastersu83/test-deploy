"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Test = () => {
  return (
    <div className="">
      Page
      <Link href={"/"}>
        <motion.span animate={{ rotate: 360 }}>back</motion.span>
      </Link>
    </div>
  );
};

export default Test;
