import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div classname="row">
      <div classname="col-md-8 offset-md-1">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
