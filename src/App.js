import React from 'react';
import taboos from './data/taboos'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {taboos.map(taboo => (<p>{taboo.word}<br /><p>{taboo.tabooWords}</p></p>))}
      </header>
    </div>
  );
}

export default App;
