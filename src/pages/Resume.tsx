import Link from "next/link";
import styles from "@/styles/Resume.module.sass";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import History from "@/components/History";
import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Resume() {
  return (
    <>
      {" "}
      <div className={mainFont.className}>
        <div className={styles.resumePage}>
          <h1 className={styles.titleText}>Resume </h1>
          <br />

          <p>
            To view a PDF of my full resume, please click{" "}
            {/* CREATE NEW RESUME */}
            <Link
              href="https://storage.googleapis.com/resume-download/Krieg_Scott%20Resume.pdf"
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
