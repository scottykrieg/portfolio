import styles from "@/styles/Home.module.sass";

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
          <h6>Hi, I am </h6>
          <br />
          <h1>Scotty Krieg</h1>
          <br />
          <h4>A software developer.</h4>
        </div>{" "}
      </div>
    </>
  );
}
