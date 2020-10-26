import React from 'react'
import '../App.css'

function FrontCard(props) {

    return (
            <div className="card-front">
                { (props.id) === '1' ? (
                    <div className="inner">  
                        <div className="card-title">{props.word}</div>
                        <div className="card-subtitles">{props.tabooWords.map(taboo => (<div className="card-subtitle">{taboo}</div>))}</div>
                    </div>

                ) : (
                    <div className="inner"> 
                        <div className="card-title">{props.name}</div>
                        <div className="card-subtitles">{props.clues.map(clue => (<div className="card-subtitle">{clue}</div>))}</div>
                    </div>
                )}
            </div>
    )
}

export default FrontCard

