import React, { useState, useEffect } from 'react';
import localApi from '../../services/api';
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    localApi.get('/todos')
      .then(res => {
        console.log(res.data);
        setTodos(res.data.todos)
    })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <div>
      <div className="container p-4">
      <h1>Todo List</h1>
        <div className="card">
        {todos.map(todo => (
            <>
            <div className="card-header">
                <h4 key={todo.id}>{todo.title}</h4>
            </div>
            </>

))}
        </div>
      </div>
    </div>
  )
}

export default TodoList;
