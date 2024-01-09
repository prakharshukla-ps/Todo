import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { Link } from "react-router-dom";
import styles from "./Tab.module.css";

export default function Tab() {
  const { items } = useContext(TodoContext);
  console.log(items);
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.listAnchor} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#5c8089",
                padding: "1rem",
                borderRadius: "1rem",
              }}
              to="remaining"
            >
              Remaining
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="completed">
              Completed
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
