import { useRef, useState } from "react";
import css from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  let noOfUpdate = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdate.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(noOfUpdate.current)
  };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here..."
            className={css["input-class"]}
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={css["input-class"]}
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success
           ${css["button-class"]}`}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
