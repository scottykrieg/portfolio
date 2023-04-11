import {
  MdSchool,
  MdForklift,
  MdPhoneInTalk,
  MdOutlineFitnessCenter,
  MdOutlineWork,
} from "react-icons/md";
import styles from "@/styles/History.module.sass";

export default function History() {
  return (
    <>
      <div className={styles.jobHistory}>
        <MdOutlineWork size={70} />
        <h1>Job History</h1>

        <li>
          <MdSchool /> Private Tutor, Independent: January 2023-Present
        </li>
        <li>
          <MdForklift /> Equipment Operator, Recycling Management Resources:
          September 2022-November 2022
        </li>
        <li>
          <MdPhoneInTalk /> Lead Generator, Resonance Music Group: May
          2022-September 2022{" "}
        </li>
        <li>
          <MdOutlineFitnessCenter /> Front Desk Attendant (Wellness Center),
          Dunwoody Country Club: October 2021-April 2022
        </li>
      </div>
    </>
  );
}
