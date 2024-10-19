function TodoApp() {
  return (
    <>
      <div class="row g-2 ms-5 mt-5 me-5">
        <div class="col-2">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value="Study"
            />
            <label for="floatingInputGrid">Task Name</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Task Description"
              value="Read React interview questions"
            />
            <label for="floatingInputGrid">Task Description</label>
          </div>
        </div>
        <div class="col-2">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
              <option value="1" style={{backgroundColor: "red", color: "white"}}>High</option>
              <option value="2" style={{backgroundColor: "yellow", color: "white"}}>Medium</option>
              <option value="3" style={{backgroundColor: "green", color: "white"}}>Low</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
      </div>
      <div className="text-center m-4">
      <button className="btn btn-success">Add Task</button>
      </div>
    </>
  );
}

export default TodoApp;
