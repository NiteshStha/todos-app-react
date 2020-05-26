// External libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Internal files
import './todo-style.css';
import EditIcon from '../assets/icons/edit.png';
import DeleteIcon from '../assets/icons/delete.png';
import { completeTodo, changeState, deletoTodo } from '../redux/actions';

function Todo(prop) {
  const { todo } = prop;
  const [completed, setCompleted] = useState(todo.isCompleted);

  const dispatch = useDispatch();

  const handleComplete = () => {
    const isCompleted = !completed;
    setCompleted(isCompleted);
    dispatch(completeTodo(todo.id, isCompleted));
  };

  const handleStateChange = () => {
    dispatch(changeState('edit_item', todo.id));
  };

  const handleDelete = () => {
    dispatch(deletoTodo(todo.id));
  };

  return (
    <div className="todo-item">
      <div className="todo">
        <input
          type="checkbox"
          className="checkbox"
          id={todo.id}
          checked={completed}
          onChange={handleComplete}
        />
        <label htmlFor={todo.id} className="todo-item-title">
          {todo.title}
        </label>
      </div>
      <div className="todo-item-btns">
        <img
          src={EditIcon}
          alt="Edit Icon"
          className="btn"
          width="30"
          style={{ marginRight: 10 }}
          onClick={handleStateChange}
        />
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          className="btn"
          width="30"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default Todo;
