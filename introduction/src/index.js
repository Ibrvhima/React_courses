import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import UsersList from './components/UsersList';
import StatusMessage from './components/StatusMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UsersList /> */}
    <StatusMessage />
  </React.StrictMode>
);


