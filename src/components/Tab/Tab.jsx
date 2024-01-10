import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";

export default function Tab() {
  return (
    <div className={styles.tab}>
      <ul className={`${styles.list} activeLink`}>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`remaining`}>Remaining</NavLink>
        </li>
        <li>
          <NavLink to={`completed`}>Completed</NavLink>
        </li>
        <li>
          <NavLink to={`all`}>All</NavLink>
        </li>
      </ul>
    </div>
  );
}
