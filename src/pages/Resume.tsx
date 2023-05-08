import Link from "next/link";
import styles from "@/styles/Resume.module.sass";
import Education from "@/Components/Education";
import Skills from "@/Components/Skills";
import History from "@/Components/History";
import { Noto_Sans_Mono } from "next/font/google";
import ThreeScene from "@/Components/ThreeScene";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Resume() {
  return (
    <>
      <ThreeScene />{" "}
      <div className={mainFont.className}>
        <div className={styles.resumePage}>
          <h1 className={styles.titleText}>Resume </h1>
          <br />

          <p>
            To view a PDF of my full resume, please click{" "}
            <Link
              href="https://storage.googleapis.com/resume-download/Krieg_Scott_Jr%20Resume%20.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              here.{" "}
            </Link>
          </p>
          <Skills />
          <Education />
          <History />
        </div>{" "}
      </div>
    </>
  );
}
