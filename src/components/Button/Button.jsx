import styles from "./Button.module.css";

export default function Button({ btn, btnfunction, styleClass }) {
  return (
    <button className={styles[styleClass]} onClick={btnfunction}>
      {btn}
    </button>
  );
}
