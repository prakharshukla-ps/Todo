import styles from "./Input.module.css";

export default function Input({
  isChecked,
  handleIsChecked,
  date,
  handleDate,
  input,
  handleInput,
  description,
  handleDescription,
}) {
  return (
    <>
      <input
        type="checkbox"
        value={isChecked}
        checked={isChecked}
        onChange={() => handleIsChecked((isChecked) => !isChecked)}
        className={styles.check}
      />
      <input
        type="date"
        className={styles.date}
        value={date}
        onChange={(e) => handleDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter title of your task..."
        className={styles.input}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
      <textarea
        placeholder="Enter task details..."
        className={styles.description}
        value={description}
        onChange={(e) => handleDescription(e.target.value)}
      ></textarea>
    </>
  );
}
