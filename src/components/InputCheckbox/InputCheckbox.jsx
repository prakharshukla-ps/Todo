import styles from "./InputCheckbox.module.css";

export default function InputCheckbox({ isChecked, handleIsChecked }) {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      value={isChecked}
      checked={isChecked}
      onChange={() => handleIsChecked((isChecked) => !isChecked)}
    />
  );
}
