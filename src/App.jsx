import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "4/2/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     date: "5/2/2024",
  //   },
  //   {
  //     name: "Like the video",
  //     date: "6/2/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const deleteItem = (itemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <center className="todo-container w-50 m-auto">
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
