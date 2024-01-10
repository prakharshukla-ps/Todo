import styles from "./InputDate.module.css";

export default function InputDate({ date, handleDate }) {
  return (
    <input
      className={styles.date}
      type="date"
      value={date}
      onChange={(e) => handleDate(e.target.value)}
    />
  );
}
