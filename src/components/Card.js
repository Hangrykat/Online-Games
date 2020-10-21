import React from 'react'

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-title">{props.word}</div>
            <div className="card-subtitle">{props.tabooWords.map(tabooWord => (<p>{tabooWord}</p>))}</div>
        </div>
    )
}

export default Card
