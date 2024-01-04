export default function Button({ btn, btnfunction }) {
  return <button onClick={btnfunction}>{btn}</button>;
}
