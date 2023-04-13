import Head from "next/head";
import About from "./About";
import ContactForm from "./Contact";
import Home from "./Home";
import { Noto_Sans_Mono } from "next/font/google";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import stars from "@/components/images/Frame.svg";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

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
        <div style={{ height: "100vh" }}>
          {" "}
          <div className={mainFont.className}>
            <Parallax pages={4} style={{ height: "100vh" }}>
              <ParallaxLayer
                sticky={{ start: 0, end: 2 }}
                style={{
                  display: "grid",
                  placeContent: "center",
                  backgroundSize: "cover",
                }}
              >
                <Image src={stars} alt="stars" />
              </ParallaxLayer>
              <Home />
              <About />
              <ContactForm />
            </Parallax>
          </div>{" "}
        </div>
      </main>
    </>
  );
}
