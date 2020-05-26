import React, { useState, useEffect } from 'react';

import './todo-style.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterStatus, changeFilterSearch } from '../redux/actions';

function Nav() {
  const [searchTerm, setSearchTerm] = useState('');

  const filterStatus = useSelector((state) => state.filter.status);
  const dispatch = useDispatch();

  const handleFilterStatus = (filterStatus) => {
    dispatch(changeFilterStatus(filterStatus));
  };

  const handleFilterSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Using as a callback after updating the state of the searchTerm
  useEffect(() => {
    dispatch(changeFilterSearch(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li
          className="nav-list-item"
          {...(filterStatus === 'in_process'
            ? { style: { backgroundColor: '#41b3a3' } }
            : {})}
          onClick={() => {
            handleFilterStatus('in_process');
          }}
        >
          In Process
        </li>
        <li
          className="nav-list-item"
          {...(filterStatus === 'completed'
            ? { style: { backgroundColor: '#41b3a3' } }
            : {})}
          onClick={() => {
            handleFilterStatus('completed');
          }}
        >
          Completed
        </li>
        <li
          className="nav-list-item"
          {...(filterStatus === 'all'
            ? { style: { backgroundColor: '#41b3a3' } }
            : {})}
          onClick={() => {
            handleFilterStatus('all');
          }}
        >
          All
        </li>
      </ul>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleFilterSearch}
        />
      </div>
    </div>
  );
}

export default Nav;
