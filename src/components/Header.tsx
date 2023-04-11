import Link from "next/link";
// import ScrollLink from "./ScrollLink";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Noto_Sans_Mono } from "next/font/google";
import styles from "@/styles/Header.module.sass";
import {
  MdPerson,
  MdMailOutline,
  MdSchool,
  MdOutlineDesktopMac,
} from "react-icons/md";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Header() {
  const isBrowser = () => typeof window !== "undefined";
  function scrollToElement(selector: any) {
    if (!isBrowser()) return;

    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      const homePageUrl = "/";
      const urlWithElement = `${homePageUrl}${selector}`;
      window.location.href = urlWithElement;
    }
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Avatar className={styles.avatar}>SK</Avatar>
        </Link>
        <Button
          onClick={() => scrollToElement("#about")}
          sx={{
            bgcolor: "#10347A !important",
            color: "#ffffff !important",
            margin: "10px",
            "& svg": {
              fontSize: "1.5rem",
              padding: "0 0.5rem",
            },
          }}
        >
          {/* CHANGE URL BEFORE DEPLOY */}
          <span>About</span> <MdPerson />
        </Button>
        <Button
          onClick={() => scrollToElement("#contact")}
          sx={{
            bgcolor: "#10347A !important",
            color: "#ffffff !important",
            margin: "10px",
            "& svg": {
              fontSize: "1.5rem",
              padding: "0 0.5rem",
            },
          }}
        >
          {/* CHANGE URL BEFORE DEPLOY */}
          <span>Contact</span> <MdMailOutline />
        </Button>

        <Button
          sx={{
            bgcolor: "#10347A !important",
            color: "#ffffff !important",
            margin: "10px",
            "& svg": {
              fontSize: "1rem",
              padding: "0 0.5rem",
            },
          }}
        >
          <Link href="/Projects">
            <span>Projects</span> <MdOutlineDesktopMac />
          </Link>
        </Button>
        <Button
          sx={{
            bgcolor: "#10347A !important",
            color: "#ffffff !important",
            margin: "10px",
            "& svg": {
              fontSize: "1rem",
              padding: "0 0.5rem",
            },
          }}
        >
          <Link href="/Resume">
            <span>Resume</span> <MdSchool />
          </Link>
        </Button>
      </div>
    </>
  );
}
