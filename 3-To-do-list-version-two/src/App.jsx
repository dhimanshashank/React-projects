import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/7/2024",
    },
    {
      name: "Go To College",
      duedate: "4/7/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <div className="app-items">
        <AddToDo />
        <TodoItems todoItems={todoItems}></TodoItems>       
      </div>
    </center>
  );
}

export default App;
