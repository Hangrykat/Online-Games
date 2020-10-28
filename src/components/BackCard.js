import React from 'react'

function BackCard(props) {
    return (
        <div className="card-back">
        <div className="inner">
            <div className="title">           
                <div className="title-text">How to play?</div>
            </div>
            {(props.game ==="taboo") ? (            
                <div className="instructions">
                    <ul>
                        <li>Check out <a href='https://www.hasbro.com/common/instruct/Taboo(2000).PDF'>Hasbro's Official Site</a> for rules and instructions. </li>
                        <li>For those who think I should implement a countdown instead of a stopwatch, feel free to write your own app with the guidance of this <a href="https://www.freecodecamp.org/learn"> website </a>. </li>
                        <li>General design of this app: There isn't any back button. Find your own way around. Don't worry, you'll manage it. </li>
                    </ul>
                </div>
            ) : (            
                <div className="instructions">
                    <ul>                    
                        <li>Recommendation: play a reversed version of 'Guess Who?'. Each round, the card holder will give one of the clues (3 words under the character).</li>
                        <li>Then, each player will take turn to ask a 'yes or no' question. The first person to guess the answer wins. </li>
                        <li>Note: Choose your clue wisely because you don't want the game to end too soon.</li>                     
                    </ul>
                </div>)}

        </div>
      </div>
    )
}

export default BackCard
