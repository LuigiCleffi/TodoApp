import { useState } from "react";
import "./global.css";
import axios from "axios";
function App() {
  const [todo, setTodo] = useState({
    title: ''
  });

  const handleSubmit = evt => {
    evt.preventDefault()
    axios.post('/newTodo', todo)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  function checkData(e) {
    console.log(todoTitle);
    return e.preventDefault();
  }
  return (
    <div className="App align-items-center my-3">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Todo List</h1>
          </div>
          <div className="card-body">
            <div className="form-group my-2">
              <form className="d-inline-flex" onSubmit={handleSubmit}>
                <input
                  name="titleList"
                  id="titleList"
                  type="text"
                  placeholder="List Title"
                  className="form-control"
                  value={todo.title}
                  onChange={(e) => setTodo(e.target.value).title}
                />
                <button
                  type="submit"
                  className="btn btn-dark mx-2"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
