import TodoItem from "./ToDoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return <TodoItem todoDate={item.duedate} todoName={item.name} />;
      })}
    </div>
  );
};

export default TodoItems;