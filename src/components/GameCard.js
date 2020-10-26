import React from 'react'

function GameCard(props) {

    return (
        <div className="game-container">
            <div className="game-pic"><img src={props.img} alt="" /></div>
        </div>        
    )}

export default GameCard
