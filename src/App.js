import React, { useState } from 'react'
import taboos from './data/taboos'
import Card from './components/Card'
import Button from './components/Button'
import './App.css';

function App() {
  const [randomIndex, setRandomIndex] = useState(0)
    
  function nextCard() {    
    setRandomIndex(Math.floor(Math.random()*taboos.length));    
  }
  {/* PLAIN JS
    let randomIndex = (Math.floor(Math.random()*taboos.length))

    function nextCard() {
      let newIndex = Math.floor(Math.random()*taboos.length);
      randomIndex = newIndex;
      console.log(newIndex)
      return newIndex;
    }*/}
  return (
    <div className="App">
      <header>
        <svg>
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">Taboo</text>
          </symbol>
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
        </svg>
      </header>      
      <main>
        <Card
          word={taboos[randomIndex].word}
          tabooWords={taboos[randomIndex].tabooWords}
        />
        <Button label="Next Card" onClick={() => {nextCard()}} />
      </main>
    </div>
  );
}

export default App;
