import React from 'react'

function MenuButton(props) {
    return (
        <div className="menu-button-container">
              <div className="menu-button" onClick={() => props.clickAction(true)}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
        </div>
    )
}

export default MenuButton
