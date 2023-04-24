import { Noto_Sans_Mono } from "next/font/google";
import styles from "@/styles/Contact.module.sass";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

// import scrollToTop from "@/components/ScrollToTop";
const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Contact() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div id="contact" className={mainFont.className}>
        <div className={styles.contactForm}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1>Send me a message!</h1>
          </motion.div>
          <form
            action="https://formsubmit.co/scotty.krieg@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="hidden"
              name="_subject"
              placeholder="Subject"
              value="New submission!"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              size={25}
            />
            <br />
            <input type="text" name="message" placeholder="Message" size={50} />
            <br />

            <div className={styles.formStyle}>
              {" "}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "slategrey",
                    borderColor: "gray",
                    margin: "15px",
                    ":hover": { backgroundColor: "silver" },
                  }}
                  type="submit"
                >
                  Send
                </Button>
              </motion.div>
            </div>
          </form>
          <p>
            Built using <Link href="https://formsubmit.co/">FormSubmit.co</Link>
          </p>
          <p>You can also visit my other pages:</p>
          <div className={styles.socialMedia}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="https://www.github.com/scottykrieg">
                {" "}
                <SiGithub size={25} />
              </Link>{" "}
              <Link href="https://www.linkedin.com/in/scott-krieg-jr-015a74117/">
                {" "}
                <SiLinkedin size={25} />
              </Link>
            </motion.div>
          </div>{" "}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <p
              style={{
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                /* Handle hover in */
              }}
              onMouseLeave={() => {
                /* Handle hover out */
              }}
              onClick={scrollToTop}
            >
              Scroll to the top of the page.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
