import { Outlet } from "react-router-dom";

import Tab from "../Tab/Tab";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Tab />
      <Outlet />
    </div>
  );
}
