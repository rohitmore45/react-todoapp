import css from "./TodoItem1.module.css";

export default function TodoItem1({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className={` row ${css["kg-row"]}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className={`btn btn-danger ${css['button-class']}`}>Delete</button>
        </div>
      </div>
    </div>
  );
}
