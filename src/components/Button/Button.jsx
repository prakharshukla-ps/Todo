import styles from "./Button.module.css";

export default function Button({ btn, btnfunction, styleClass, varColor }) {
  return (
    <button
      className={`${styles[styleClass]} ${styles[varColor]}`}
      onClick={btnfunction}
    >
      {btn}
    </button>
  );
}

// delete, standard, outline
