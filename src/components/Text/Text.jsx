import styles from "./Text.module.css";

export default function Text({ children, fontColor, weight, size, font }) {
  return (
    <p
      style={{
        color: fontColor,
        fontWeight: weight,
        fontSize: size,
        fontFamily: font,
      }}
      className={styles.text}
    >
      {children}
    </p>
  );
}
