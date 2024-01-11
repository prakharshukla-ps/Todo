import styles from "./Button.module.css";

export default function Button({
  btn,
  btnfunction,
  styleClass,
  varColor,
  ...rest
}) {
  return (
    <button
      className={`${styles[styleClass]} ${styles[varColor]} `}
      onClick={btnfunction}
      {...rest}
    >
      {btn}
    </button>
  );
}

// delete, standard, outline
