import Link from "next/link";
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
import { motion } from "framer-motion";

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Avatar className={styles.avatar}>SK</Avatar>
          </motion.div>
        </Link>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            onClick={() => scrollToElement("#about")}
            sx={{
              bgcolor: "#000000 !important",
              color: "#ffffff !important",
              margin: "10px",
              "& svg": {
                fontSize: "1.5rem",
                padding: "0 0.5rem",
              },
            }}
          >
            <Link href="/#about">
              <span>About</span> <MdPerson />
            </Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            onClick={() => scrollToElement("#contact")}
            sx={{
              bgcolor: "#000000 !important",
              color: "#ffffff !important",
              margin: "10px",
              "& svg": {
                fontSize: "1.5rem",
                padding: "0 0.5rem",
              },
            }}
          >
            <Link href="/#contact">
              <span>Contact</span> <MdMailOutline />
            </Link>
          </Button>{" "}
        </motion.div>
        <Link href="/Projects">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              sx={{
                bgcolor: "#000000 !important",
                color: "#ffffff !important",
                margin: "10px",
                "& svg": {
                  fontSize: "1rem",
                  padding: "0 0.5rem",
                },
              }}
            >
              <span>Projects</span> <MdOutlineDesktopMac />
            </Button>{" "}
          </motion.div>
        </Link>
        <Link href="/Resume">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              sx={{
                bgcolor: "#000000 !important",
                color: "#ffffff !important",
                margin: "10px",
                "& svg": {
                  fontSize: "1rem",
                  padding: "0 0.5rem",
                },
              }}
            >
              <span>Resume</span> <MdSchool />
            </Button>{" "}
          </motion.div>
        </Link>
      </div>
    </>
  );
}
