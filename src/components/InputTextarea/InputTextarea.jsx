export default function InputTextarea({
  rows = 5,
  columns = 40,
  styles,
  ...rest
}) {
  return (
    <textarea
      className={styles}
      placeholder="Enter details here..."
      cols={columns}
      rows={rows}
      {...rest}
    />
  );
}
