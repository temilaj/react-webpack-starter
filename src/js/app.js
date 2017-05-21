require('../scss/style.scss')
import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

ReactDOM.render(
  <h1>
    Hello, {formatName(user)}!
  </h1>,
  document.querySelector('#root')
);
