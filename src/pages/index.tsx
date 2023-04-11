import Head from "next/head";
import About from "./About";
import ContactForm from "./Contact";
import Home from "./Home";

import { Noto_Sans_Mono } from "next/font/google";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Index() {
  return (
    <>
      <Head>
        <title>Scott Krieg</title>
      </Head>
      <main>
        <div className={mainFont.className}>
          <div className="homePage">
            <Home />

            <About />
          </div>

          <ContactForm />
        </div>{" "}
      </main>
    </>
  );
}
