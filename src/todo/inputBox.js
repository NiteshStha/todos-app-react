// External libraries
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

// Internal files
import { addTodo, updateTodo, changeState } from '../redux/actions';

function InputBox() {
  const [title, setTitle] = useState('');
  const textInput = useRef();

  const state = useSelector((state) => state.state);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (state.currentState === 'edit_item') {
      const todo = todos.find((todo) => todo.id === state.id);
      setTitle(todo.title);
      focusInput();
    }
  }, [state, todos]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.currentState === 'add_item') add();
    if (state.currentState === 'edit_item') update();
    setTitle('');
  };

  const add = () => {
    const todo = {
      id: uuid(),
      title,
      isCompleted: false
    };
    dispatch(addTodo(todo));
  };

  const update = () => {
    dispatch(updateTodo(state.id, title));
    dispatch(changeState('add_item', null));
  };

  const focusInput = () => textInput.current.focus();

  const handleEscapeEdit = (event) => {
    if (event.keyCode === 27) {
      dispatch(changeState('add_item', null));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-item todo-input">
      <input
        ref={textInput}
        type="text"
        className="create-input"
        placeholder={
          state.currentState === 'add_item' ? 'Add Todo' : 'Edit Todo'
        }
        value={title}
        onChange={handleChange}
        onKeyDown={handleEscapeEdit}
      />
      {state.currentState === 'edit_item' && (
        <span className="edit-info">ESC to exit edit</span>
      )}
    </form>
  );
}

export default InputBox;
