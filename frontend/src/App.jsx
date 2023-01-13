import { useState } from "react";
import "./global.css";
import localApi from "../services/api";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localApi
      .post("/todo/newTodo", JSON.stringify({ todo }))
      .then((res) => {
        setTodo("");
        console.log(res);
        navigate("/todos");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(todo);
  };

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
                  value={todo}
                  onChange={(event) => setTodo(event.target.value)}
                />
                <button type="submit" className="btn btn-dark mx-2">
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
