import React, { useState } from 'react'
import {
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import SlidingPanel from 'react-sliding-side-panel';

import MenuLink from './components/MenuLink'
import FrontCard from './components/FrontCard'
import GameTimer from './components/GameTimer'
import Header from './components/Header'
import BackCard from './components/BackCard'
import MenuButton from './components/MenuButton'
import GameCard from './components/GameCard'
import tabooImg from './assets/taboo.jpg'
import guessWhoImg from './assets/guesswho.jpg'
import charadeImg from './assets/charade.jpg'
import taboos from './data/taboos'
import characters from './data/characters'
import './App.css';



function App() {
  const [randomIndexTaboo, setRandomIndexTaboo] = useState(0)
  const [randomIndexWho, setRandomIndexWho] = useState(0)
  const [openPanel, setOpenPanel] = useState(false);

  function nextCardTaboo() {    
    setRandomIndexTaboo(Math.floor(Math.random()*taboos.length));    
  }

  function nextCardWho() {    
    setRandomIndexWho(Math.floor(Math.random()*characters.length));    
  }

  const styles = {
    container: {
      backgroundColor:'#303030',
      height: '100%',
      color: '#f0efeb'
    },
    content: {
      fontSize: '1.5rem',
      padding: 20,
      cursor: 'pointer',
      textDecoration: 'none'
    },
    closeBtn: {
      fontSize: '2rem',
      display: 'flex',
      fontWeight: 'bold',
      justifyContent: 'flex-end',
      color: '#f0efeb',
      cursor: 'pointer',
      padding: 20
    },
    activeLink: {
      fontWeight: "bold",
      color: "#f5a503"
    }
  }  

  return (
    <div className="App">
      <div className="header-container">
        <SlidingPanel
          type={'left'}
          isOpen={openPanel}
          size={25}
        >
          <div style={styles.container}>
            <div style={styles.closeBtn} onClick={() => setOpenPanel(false)}>X</div>
            <div style={styles.content}>
              <MenuLink clickAction={setOpenPanel}/>
            </div>
          </div>
          </SlidingPanel>        
        </div>



        <Switch>
          <Route exact path="/">
            <Header title="Online Games" />
            <MenuButton clickAction={setOpenPanel}/>

            <main>
              <div className="home-container">
                <div className="games-container">  
                  <NavLink to="/taboo" activeStyle={styles.activeLink}><GameCard game="Taboo" img={tabooImg} /></NavLink>
                  <NavLink to="/guesswho" activeStyle={styles.activeLink}><GameCard game="Guess Who?" img={guessWhoImg} /></NavLink>
                  <GameCard game="others" img={charadeImg}/>
                </div>
              </div>
            </main>


          </Route>
        </Switch>


        <Switch>
          <Route exact path="/taboo">
            <Header title="Taboo" />
            <MenuButton clickAction={setOpenPanel}/>
            <main>
              <div className="card-display-container">
                <div className="card-button-container"></div>
                
                  <div className="card-container">      
                      <div className="card">
                        <input type="checkbox" id="instruction-card" className="more" />
                        <div className="card-content">
                          <FrontCard
                            id='1'
                            word={taboos[randomIndexTaboo].word}
                            tabooWords={taboos[randomIndexTaboo].tabooWords}
                          />
                          <BackCard game="taboo" />
                        </div>
                      </div>
                    </div>
                    
                <div className="card-button-container" >                        
                  <label htmlFor="instruction-card" className="tooltip" aria-hidden="true">i</label>
                  <div className="next-button-container">
                    <div className="next-button" onClick={() => {nextCardTaboo()}}>&gt;</div>
                  </div>                                 
                </div>                            
              </div>
              <GameTimer />
            </main>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/guesswho">
            <Header title="Guess Who?" />
            <MenuButton clickAction={setOpenPanel}/>
            <main>              
              <div className="card-display-container">
                <div className="card-button-container"></div>
                
                  <div className="card-container">      
                      <div className="card">
                        <input type="checkbox" id="instruction-card" className="more" />
                        <div className="card-content">
                        <FrontCard
                          id='2'
                          name={characters[randomIndexWho].name}
                          clues={characters[randomIndexWho].clues}
                        />
                        <BackCard game="guesswho" /> 
                        </div>
                      </div>
                    </div>
                    
                <div className="card-button-container" >                        
                  <label htmlFor="instruction-card" className="tooltip" aria-hidden="true">i</label>
                  <div className="next-button-container">
                    <div className="next-button" onClick={() => {nextCardWho()}}>&gt;</div>
                  </div>                                 
                </div>                            
              </div>
              <GameTimer />
            </main>
          </Route>
        </Switch>

    </div>
  );
}

export default App;
