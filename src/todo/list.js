// External libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Internal files
import Todo from './todo';

function List() {
  const filterStatus = useSelector((state) => state.filter.status);
  const filterSearch = useSelector((state) => state.filter.searchTerm);
  let todos = useSelector((state) => state.todos);

  const getFilteredTodos = () => {
    if (filterStatus === 'in_process')
      todos = todos.filter((todo) => !todo.isCompleted);

    if (filterStatus === 'completed')
      todos = todos.filter((todo) => todo.isCompleted);

    if (filterSearch !== '') {
      todos = todos.filter((todo) =>
        todo.title
          .toLowerCase()
          .trim()
          .includes(filterSearch.toLowerCase().trim())
      );
    }
  };

  return (
    <>
      {getFilteredTodos()}
      <div className="todo-list">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </>
  );
}

export default List;
