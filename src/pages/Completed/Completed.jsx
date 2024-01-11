import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";

export default function Completed() {
  const { items } = useContext(TodoContext);
  return (
    <div>
      <span>Completed Task :</span>
      <ul style={{ listStyle: "none" }}>
        {items.map((it) => (
          <li key={it.id}>{it.check === true ? it.input : null}</li>
        ))}
      </ul>
    </div>
  );
}
