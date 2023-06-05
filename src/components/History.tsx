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
          <MdSchool size={40} /> Private Tutor, Independent: January
          2023-Present
        </li>
        <li>
          <MdForklift size={40} /> Equipment Operator, Recycling Management
          Resources: September 2022-November 2022, October-December 2020,
          September 2019-June 2020
        </li>
        <li>
          <MdPhoneInTalk size={40} /> Lead Generator, Resonance Music Group: May
          2022-September 2022{" "}
        </li>
        <li>
          <MdOutlineFitnessCenter size={40} /> Front Desk Attendant (Wellness
          Center), Dunwoody Country Club: October 2021-April 2022
        </li>
      </div>
    </>
  );
}
