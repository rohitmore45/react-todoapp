import css from "./TodoItem1.module.css";
import { MdDelete } from "react-icons/md";

export default function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className={` row ${css["kg-row"]}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${css["button-class"]}`}
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete /> 
          </button>
        </div>
      </div>
    </div>
  );
}
