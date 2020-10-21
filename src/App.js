import React from 'react';
import taboos from './data/taboos'
import Card from './components/Card'
import './App.css';

function App() {

  const randomIndex = Math.floor(Math.random()*taboos.length);
  
  return (
    <div className="App">
      <Card
        word={taboos[randomIndex].word}
        tabooWords={taboos[randomIndex].tabooWords}
      />
    </div>
  );
}

export default App;
