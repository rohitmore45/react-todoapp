import styles from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

export default function WelcomeMsg() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>No Todo's, Enjoy Your Day...</p>
    )
  );
}
