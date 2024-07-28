import ToDoItem from "./AddToDo";
import styles from "./Todoitems.module.css";

const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <ToDoItem toDoName={item.name} toDoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
