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
          {" "}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h5>Hi, I am </h5>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1 style={{ fontSize: "70px" }}>Scotty Krieg</h1>{" "}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h3>A software developer.</h3>
          </motion.div>
        </div>{" "}
      </div>
    </>
  );
}
