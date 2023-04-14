import styles from "@/styles/Home.module.sass";
import { motion } from "framer-motion";
import { Noto_Sans_Mono } from "next/font/google";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const mainFont = Noto_Sans_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {" "}
      {/* <Parallax pages={1}> */}
      <div className={mainFont.className}>
        <div className={styles.welcomeText}>
          {" "}
          <motion.div whileHover={{ scale: 1.05 }}>
            {/* <ParallaxLayer style={{ textAlign: "center" }}> */}
            <h5>Hi, I am </h5>
            {/* </ParallaxLayer> */}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1>Scotty Krieg</h1>{" "}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4>A software developer.</h4>
          </motion.div>
        </div>{" "}
      </div>
      {/* </Parallax> */}
    </>
  );
}
