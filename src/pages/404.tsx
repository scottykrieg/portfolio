import Link from "next/link";
import ThreeScene from "@/Components/ThreeScene";
import styles from "@/styles/404.module.sass";
import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Custom404() {
  return (
    <>
      <ThreeScene />{" "}
      <div className={mainFont.className}>
        <div className={styles.fourohfour}>
          <h1>404 Error. Oops.....</h1>
          <h3>
            Please click <Link href="/">here</Link> to go back to the home page.
          </h3>
        </div>
      </div>
    </>
  );
}
