import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem1 from "./TodoItem1";
import css from "./TodoItems.module.css";

export default function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <>
      <div className={`${css["items-container"]}`}>
        {todoItems.map((item) => {
          return (
            <TodoItem1
              todoName={item.name}
              todoDate={item.date}
              key={item.name}
            />
          );
        })}
      </div>
    </>
  );
}
