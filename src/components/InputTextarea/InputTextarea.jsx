import styles from "./InputTextarea.module.css";

export default function InputTextarea({
  rows = 5,
  columns = 30,
  description,
  handleDescription,
}) {
  return (
    <textarea
      className={styles.textarea}
      placeholder="Enter details here..."
      cols={columns}
      rows={rows}
      value={description}
      onChange={(e) => handleDescription(e.target.value)}
    />
  );
}
