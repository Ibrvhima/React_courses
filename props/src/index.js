import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './App';
// import App from './users';
// import Fruit from './produits';
import Vente from './articles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message nom = "Mamadou"/>
    
    {/* <App /> */}
    {/* <Fruit /> */}
    <Vente/>
  </React.StrictMode>
);


