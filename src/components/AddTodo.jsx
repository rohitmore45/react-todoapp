import { useContext, useRef } from "react";
import css from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  let todoNameElement = useRef();
  let dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here..."
            className={css["input-class"]}
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={css["input-class"]}
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
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
