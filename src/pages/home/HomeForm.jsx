import { useContext, useState } from "react";

import Input from "../../components/Input/Input";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import Button from "../../components/Button/Button";
import { TodoContext } from "../../Context/TodoContext";

export default function HomeForm() {
  const [showForm, setShowForm] = useState(true);

  const { setItems, notify } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    const homeFormData = new FormData(e.target);

    const { input, description, date, isChecked } =
      Object.fromEntries(homeFormData);

    setShowForm(false);

    setTimeout(() => {
      setShowForm(true);
    });

    if (!input || !description || !date)
      return alert("Missing date, title or description");

    const newItem = {
      id: input,
      input,
      date,
      description,
      check: isChecked === "on" ? true : false,
      update: false,
      clicked: false,
      active: false,
    };

    handleAddItems(newItem);
  }

  function handleAddItems(item) {
    setItems((items) => {
      if (items.findIndex((el) => el.input === item.input) === -1) {
        items = [item, ...items];
      } else {
        notify(item.input);
      }

      return items;
    });
  }

  return showForm ? (
    <form className="homeForm" onSubmit={handleSubmit}>
      <Input styles="homeFormCheck" type="checkbox" name="isChecked" />
      <Input styles="homeFormDate" type="date" name="date" />
      <Input
        styles="homeFormInput"
        place="Enter here..."
        type="text"
        name="input"
      />
      <InputTextarea styles="homeFormTextarea" name="description" />
      <Button btn={"ADD"} styleClass="formBtn" varColor="add" type="submit" />
    </form>
  ) : null;
}
