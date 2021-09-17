import React from 'react'
import UserList from './UserList'
import {UserProvider} from './UserContext'

function App() {
  return (
    <UserProvider>
      <UserList/>
    </UserProvider>
  );
}

export default App;
