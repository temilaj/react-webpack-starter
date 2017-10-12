import React, { Component } from 'react';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Jone',
  lastName: 'Dane'
};

class Home extends Component{
  render() {
    return (
     <div>
        <h1>Hello, {formatName(user)}!</h1>
      </div>
   )
  }
};

export default Home;