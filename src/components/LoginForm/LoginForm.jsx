import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { setLoginLogout } from "../../store/reducer/userReducer";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setLoginLogout(true));
    navigate("dashboard");
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className={styles.fields}>Email</span>
        <input
          className={styles.inputs}
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={styles.fields}>Password</span>
        <input
          className={styles.inputs}
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.formBtn} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
