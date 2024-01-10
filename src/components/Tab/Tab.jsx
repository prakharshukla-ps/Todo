import { Link } from "react-router-dom";
import styles from "./Tab.module.css";

export default function Tab() {
  return (
    <>
      <ul className={styles.list}>
        <li style={{ marginBottom: "3rem" }}>
          <Link className={styles.listAnchor} to="/">
            Home
          </Link>
        </li>
        <li style={{ marginBottom: "3rem" }}>
          <Link className={styles.listAnchor} to="remaining">
            Remaining
          </Link>
        </li>
        <li style={{ marginBottom: "3rem" }}>
          <Link className={styles.listAnchor} to="completed">
            Completed
          </Link>
        </li>
      </ul>
    </>
  );
}
