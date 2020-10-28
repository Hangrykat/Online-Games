import React from 'react'

function Header(props) {
    return (
        <div className="header">
            <div className="logo-container">
                <svg viewBox="0 0 600 150">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="50%" dy=".35em">{props.title}</text>
                    </symbol>
                    <use className="text" xlinkHref="#s-text" />
                    <use className="text" xlinkHref="#s-text" />
                    <use className="text" xlinkHref="#s-text" />
                    <use className="text" xlinkHref="#s-text" />
                    <use className="text" xlinkHref="#s-text" />
                </svg>
            </div>
        </div> 
    )
}

export default Header
