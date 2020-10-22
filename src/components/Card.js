import React from 'react'
import '../App.css'

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-title">{props.word}</div>
            <div className="card-subtitles">{props.tabooWords.map(tabooWord => (<div classname="card-subtitle">{tabooWord}</div>))}</div>
        </div>
    )
}

export default Card
