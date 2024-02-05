import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      date: "4/2/2024",
    },
    {
      name: "Go to college",
      date: "5/2/2024",
    },
    {
      name: "Like the video",
      date: "6/2/2024",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItem} />
      </center>
    </>
  );
}

export default App;
