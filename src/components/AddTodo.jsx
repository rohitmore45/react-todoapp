import css from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here..."
            className={css["input-class"]}
          />
        </div>
        <div className="col-4">
          <input type="date" className={css["input-class"]} />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${css["button-class"]}`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
