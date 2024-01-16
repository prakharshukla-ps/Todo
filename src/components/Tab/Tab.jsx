import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";
import { useDispatch } from "react-redux";
import { setLoginLogout } from "../../store/reducer/userReducer";

export default function Tab() {
  const dispatch = useDispatch();

  return (
    <div className={styles.tab}>
      <ul className={`${styles.list} activeLink`}>
        <li>
          <NavLink to={``}>Home</NavLink>
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
        <li>
          <button
            className={styles.logout}
            onClick={() => dispatch(setLoginLogout(false))}
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
}
