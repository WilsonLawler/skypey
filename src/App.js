import React from 'react';
import { values } from 'lodash';
import Main from './container/Main';
import Sidebar from './container/Sidebar';
import store from './store';
import './App.css';

// function App({ store }) {
  function App() {
  const { contacts } = store.getState();

  return (
    <div className="App">
     <Sidebar contacts={values(contacts)} />
     <Main />
    </div>
  );
}

export default App;
