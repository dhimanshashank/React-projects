function AddToDo(){
    return (
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter TODO Here"/>
          </div>
          <div className="col-4">
            <input type="date" /></div>
          <div className="col-2">
          <button type="button" className="btn btn-success kg-btn">Add</button>
          </div>
        </div>
    )
}

export default AddToDo;