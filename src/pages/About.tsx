import Link from "next/link";
import styles from "@/styles/About.module.sass";
import ScrollLink from "@/components/ScrollLink";
import { GiPeach, GiPeanut } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className={mainFont.className}>
      <div id="about" className={styles.aboutText}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M0 239L21.5 233.7C43 228.3 86 217.7 128.8 227C171.7 236.3 214.3 265.7 257.2 285.2C300 304.7 343 314.3 385.8 303.8C428.7 293.3 471.3 262.7 514.2 251.2C557 239.7 600 247.3 642.8 249.7C685.7 252 728.3 249 771.2 251.5C814 254 857 262 878.5 266L900 270L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#4facf7"
        />
        <h1>
          I am based in the Southern United States
          <FaFlagUsa />
          {/* FIX SPACING */}
        </h1>
        <br />
        <h4>
          <GiPeanut />
          Atlanta, Georgia specifically.
          <GiPeach />
        </h4>
        <br />
        <h2> I am available for hire today! </h2>
        <br />
        <ScrollLink
          // className={styles.messageLink}
          href="/#contact"
        >
          <h2>Send me a message.</h2>
        </ScrollLink>
        <br />
        <Link href="/Projects">
          <h2>Check out some of my work here.</h2>
        </Link>
      </div>
    </div>
  );
}
