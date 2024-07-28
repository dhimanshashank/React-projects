function ToDoItem2() {
    let toDoName = 'Go To College';
    let toDoDate = '4/10/2023';
  return (
    <div class="row my-row">
      <div class="col-6">{toDoName}</div>
      <div class="col-4">{toDoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger my-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem2;
