import styles from "@/styles/Home.module.sass";
import { motion } from "framer-motion";

import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {" "}
      <div className={mainFont.className}>
        <div className={styles.welcomeText}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h6>Hi, I am </h6>
          </motion.div>
          <br />{" "}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1>Scotty Krieg</h1>{" "}
          </motion.div>
          <br />{" "}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4>A software developer.</h4>
          </motion.div>
        </div>{" "}
      </div>
    </>
  );
}
