import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container w-50 m-auto">
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
