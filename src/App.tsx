import React from 'react';
import './App.css';
import Profile from './components/Profile';
import UsersList from './components/UsersList';
import UserState from './context/UserState';

function App() {
  return (
    <div className="App mt-5">
      <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UsersList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>

    </div>
  );
}

export default App;
