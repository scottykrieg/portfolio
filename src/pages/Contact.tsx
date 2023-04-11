import { Noto_Sans_Mono } from "next/font/google";
import styles from "@/styles/Contact.module.sass";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@mui/material";
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
          <h1>Send me a message!</h1>
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
              <Button className={styles.sendButton} type="submit">
                Send
              </Button>
            </div>
          </form>
          <p>
            Built using <Link href="https://formsubmit.co/">FormSubmit.co</Link>
          </p>
          <p>You can also visit my other pages:</p>
          <div className={styles.socialMedia}>
            <Link href="github.com">
              {" "}
              <SiGithub size={25} />
            </Link>{" "}
            <Link href="linkedin.com">
              {" "}
              <SiLinkedin size={25} />
            </Link>
          </div>
          <p
            style={{ cursor: "pointer" }}
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
        </div>
      </div>
    </>
  );
}
