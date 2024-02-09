import { useContext } from "react";
import css from "./TodoItem1.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItem1({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className={` row ${css["kg-row"]}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${css["button-class"]}`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
