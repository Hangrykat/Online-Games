import React, { useState } from 'react'
import taboos from './data/taboos'
import Card from './components/Card'
import GameTimer from './components/GameTimer'
import './App.css';
import characters from './data/characters';

function App() {
  const [randomIndex, setRandomIndex] = useState(0)

  const characterArray = characters.length

  function nextCard() {    
    setRandomIndex(Math.floor(Math.random()*taboos.length));    
  }
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
        {/*{characterArray}*/}
      </header>      
      <main>
        <div className="card-display-container">
        <div className="next-button"></div>
          <Card
            word={taboos[randomIndex].word}
            tabooWords={taboos[randomIndex].tabooWords}
          />
          <div className="next-button" onClick={() => {nextCard()}}>&gt;</div>
        </div>
        <GameTimer />
      </main>
    </div>
  );
}

export default App;
