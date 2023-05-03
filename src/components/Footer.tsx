import styles from "@/styles/Footer.module.sass";
import Link from "next/link";
import { motion } from "framer-motion";
// import MoonSurface from "@/components/images/MoonSurface.svg";

// Use the MoonSurface variable to reference the SVG file
import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiMui,
  SiTypescript,
  SiGithub,
} from "react-icons/si";
import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <>
      {" "}
      <div className={styles.footerContainer}>
        <div className={mainFont.className}>
          <h3 className={styles.footerContainer}>
            Created by Scotty Krieg, using:
          </h3>
          <div className={styles.iconRow}>
            <SiMui />
            <SiTypescript />
            <SiReact />
            <SiNextdotjs />
            <SiFirebase />
          </div>
          <div className={styles.footerGithub}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="https://github.com/scottykrieg/portfolio">
                {" "}
                <SiGithub />
                GitHub Repository for this site.
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
