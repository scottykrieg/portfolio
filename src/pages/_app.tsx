import "@/styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "@/Components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {" "}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(49% 43%, 60% 51%, 50% 62%, 39% 51%)",
            },
          }}
          className="base-page-size"
        >
          <Layout>
            {" "}
            <Component {...pageProps} />
          </Layout>{" "}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
