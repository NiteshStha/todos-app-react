// External libraries
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Internal files
import Todos from './todo';
import './style.css';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
