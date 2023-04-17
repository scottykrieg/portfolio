import Link from "next/link";
import styles from "@/styles/About.module.sass";
import { GiPeach, GiPeanut } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { Noto_Sans_Mono } from "next/font/google";
import { motion } from "framer-motion";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className={mainFont.className}>
      <div id="about" className={styles.aboutText}>
        {" "}
        <h2>
          <motion.div whileHover={{ scale: 1.05 }}>
            {" "}
            I am based in the Southern United States
            {/* FIX SPACING */}
          </motion.div>
          <FaFlagUsa />
        </h2>{" "}
        <br />{" "}
        <span>
          <motion.div whileHover={{ scale: 1.05 }}>
            Atlanta, Georgia specifically.
          </motion.div>
          <GiPeach size={30} /> <GiPeanut size={30} />
        </span>
        <br />{" "}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3> I am available for hire today! </h3>
        </motion.div>
        <br />
        <div>
          {" "}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/Projects">
              <h2>Check out some of my work here.</h2>
            </Link>{" "}
          </motion.div>
        </div>{" "}
      </div>
    </div>
  );
}
