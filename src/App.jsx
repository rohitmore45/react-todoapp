import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

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

  const handleNewItem = (itemName, itemDueDate) => {
    // let newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    // setTodoItems(newTodoItems);

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const handleDeleteItem = (itemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
    // console.log(`Item delted ${itemName}`);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
