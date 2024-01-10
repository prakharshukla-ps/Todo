import styles from "./InputText.module.css";

export default function InputText({ input, handleInput }) {
  return (
    <input
      className={styles.inputText}
      type="text"
      placeholder="Enter title here..."
      value={input}
      onChange={(e) => handleInput(e.target.value)}
    />
  );
}
