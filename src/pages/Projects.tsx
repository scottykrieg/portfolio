import Link from "next/link";
import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiMui,
  SiGithub,
} from "react-icons/si";
import styles from "@/styles/Projects.module.sass";
import { Noto_Sans_Mono } from "next/font/google";
import ThreeScene from "@/Components/ThreeScene";
import { motion } from "framer-motion";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <>
      {" "}
      <ThreeScene />
      <div className={mainFont.className}>
        <div className={styles.projectsPage}>
          {" "}
          <h1>Projects</h1>
          <br />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="https://one-rep-max-b404d.web.app/">
              <h2>One Rep Max Calculator</h2>
            </Link>
          </motion.div>
          <p>
            Allows users to calculate a theoretical one rep max:a weight that
            can be lifted in one repetition of an exercise by testing a lighter
            weight at a higher repetition range, usually under 10 reps.{" "}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {" "}
            <Link href="https://github.com/scottykrieg/next-1rm-calculator">
              {" "}
              <SiGithub />
              GitHub Repository
            </Link>
          </motion.div>
          <h3>Built using:</h3>
          <ul>
            <li>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SiMui />
                Material UI
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SiTypescript />
                Typescript
              </motion.div>
            </li>
            <li>
              {" "}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SiReact />
                React
              </motion.div>
            </li>
            <li>
              {" "}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SiNextdotjs />
                NextJS
              </motion.div>
            </li>
            <li>
              {" "}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SiFirebase />
                Firebase
              </motion.div>
            </li>
          </ul>{" "}
        </div>{" "}
      </div>
    </>
  );
}
