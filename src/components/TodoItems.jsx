import TodoItem1 from "./TodoItem1";
import css from "./TodoItems.module.css";
export default function TodoItems({ todoItems }) {
  return (
    <>
      <div className={`${css["items-container"]}`}>
        {todoItems.map((item, ind) => {
          return (
            <TodoItem1 todoName={item.name} todoDate={item.date} key={ind} />
          );
        })}
      </div>
    </>
  );
}
