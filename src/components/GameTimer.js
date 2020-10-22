import React from 'react'
import Timer from 'react-compound-timer'
import { IconContext } from "react-icons";
import { VscDebugStart, VscDebugPause, VscDebugRestart } from 'react-icons/vsc'

function GameTimer() {

    return (
        <div className="timer-container">
            <Timer
          initialTime={0}
          startImmediately={false}
        >
          {({ start, pause, reset}) => (
              <React.Fragment>
                  <div className="timer-display">
                      <div className="timer-digit"><Timer.Minutes />  m</div>
                      <div className="timer-digit"><Timer.Seconds />  s</div>
                  </div>
                  <IconContext.Provider value={{ style: { verticalAlign: 'middle'}, color: "#333333", size: "1.5rem"}}>
                    <div className="timer-controls">
                        <div className="timer-control"><VscDebugStart onClick={start}/></div>
                        <div className="timer-control"><VscDebugPause onClick={pause}/></div>
                        <div className="timer-control"><VscDebugRestart onClick={reset}/></div>
                    </div>
                  </IconContext.Provider>
              </React.Fragment>
          )}
        </Timer>
            
        </div>
    )
}

export default GameTimer
