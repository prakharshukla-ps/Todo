import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { Outlet } from "react-router-dom";

export default function Remaining() {
  const { items } = useContext(TodoContext);
  return (
    <div>
      <Outlet />
      <span>Remaining Task :</span>
      <ul style={{ listStyle: "none" }}>
        {items.map((it) => (
          <li key={it.id}>{it.check === false ? it.input : null}</li>
        ))}
      </ul>
    </div>
  );
}
