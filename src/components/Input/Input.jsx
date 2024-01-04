import styles from "./Input.module.css";

export default function Input({ input, handleInput }) {
  return (
    <input
      type="text"
      placeholder="Enter any task..."
      className={styles.input}
      value={input}
      onChange={(e) => handleInput(e.target.value)}
    />
  );
}
