import React from 'react';

import List from './list';
import Nav from './nav';
import InputBox from './inputBox';

function Todos() {
  return (
    <>
      <Nav />
      <InputBox/>
      <List />
    </>
  );
}

export default Todos;
