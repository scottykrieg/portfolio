import styles from "@/styles/Skills.module.sass";

import {
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiSass,
  SiMui,
  SiExpress,
} from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";

const skills = [
  <SiHtml5 size={40} key="9" />,
  <SiCss3 size={40} key="10" />,
  <SiSass size={40} key="11" />,
  <SiMui size={40} key="12" />,
  <SiExpress size={40} key="13" />,
  <SiJavascript size={40} key="1" />,
  <SiTypescript size={40} key="7" />,
  <SiReact size={40} key="2" />,
  <SiNextdotjs size={40} key="6" />,
  <SiPython size={40} key="3" />,
  <SiDjango size={40} key="4" />,
  <SiFirebase size={40} key="5" />,
  <SiGithub size={40} key="8" />,
];

const skillList = skills.map((skill, index) => (
  <motion.a whileHover={{ scale: 3 }} key={index}>
    {/* // eslint-disable-next-line react/jsx-key */}
    <li className={styles.iconRow}>
      <>{skill}</>
    </li>
  </motion.a>
));

function Skills(): JSX.Element {
  return (
    <>
      <div className={styles.skillsStyle}></div>
      <BsCodeSlash size={70} />
      <br></br>
      <h1 className={styles.skillsTitle} id="index">
        Skills
      </h1>
      <div className={styles.iconRow}>
        <div>{skillList}</div>
      </div>
    </>
  );
}

export default Skills;
