import styles from "@/styles/Footer.module.sass";
// import MoonSurface from "@/components/images/MoonSurface.svg";

// Use the MoonSurface variable to reference the SVG file
import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiMui,
  SiTypescript,
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
          <h6 className={styles.footerContainer}>
            Created by Scotty Krieg, using:
          </h6>
          <div className={styles.iconRow}>
            <SiMui />
            <SiTypescript />
            <SiReact />
            <SiNextdotjs />
            <SiFirebase />
          </div>
        </div>
      </div>
    </>
  );
}
