import styles from "@/styles/Education.module.sass";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <>
      <div className={styles.educationDiv}>
        <FaUserGraduate size={70} />
        <h1>Education</h1>
        <h2>Georgia State University</h2>
        <h4>Graduated August 2017</h4>
        <h4>Bachelor of Interdisciplinary Studies</h4>
        <h5>Concentration: Media Entrepreneurship</h5>
        <br />
        <h4>Achievements:</h4>
        <li>Deans List x 4</li>
        <li>Presidents List x 1</li>
      </div>
    </>
  );
}
