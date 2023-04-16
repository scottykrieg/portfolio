import Head from "next/head";
import About from "./About";
import ContactForm from "./Contact";
import Home from "./Home";
import ThreeScene from "@/Components/ThreeScene";

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
      </Head>{" "}
      <main>
        {" "}
        <div>
          <div className={mainFont.className}>
            <ThreeScene /> <Home />
            <About />
            <ContactForm />
          </div>{" "}
        </div>{" "}
      </main>
    </>
  );
}
