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
          <Link href="https://one-rep-max-b404d.web.app/">
            <h2>One Rep Max Calculator</h2>
          </Link>
          <p>
            Allows users to calculate a theoretical one rep max:a weight that
            can be lifted in one repetition of an exercise by testing a lighter
            weight at a higher repetition range, usually under 10 reps.{" "}
          </p>
          <Link href="https://github.com/scottykrieg/next-1rm-calculator">
            {" "}
            <SiGithub />
            GitHub Repository
          </Link>
          <h3>Built using:</h3>
          <ul>
            <li>
              <SiMui />
              Material UI
            </li>
            <li>
              <SiTypescript />
              Typescript
            </li>
            <li>
              <SiReact />
              React
            </li>
            <li>
              <SiNextdotjs />
              NextJS
            </li>
            <li>
              <SiFirebase />
              Firebase
            </li>
          </ul>{" "}
        </div>{" "}
      </div>
    </>
  );
}
