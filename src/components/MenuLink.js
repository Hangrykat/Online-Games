import React from 'react'
import {NavLink} from "react-router-dom";

function MenuLink(props) {

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
        link: {
          color: 'inherit',
          textDecoration: 'inherit'
        },
        activeLink: {
          fontWeight: "bold",
          color: "#f5a503"
        }
    }
    return (
        <div>
            <NavLink exact to="/" activeStyle={styles.activeLink} style={styles.link} onClick={() => props.clickAction(false)}><h3>Home</h3></NavLink>
            <NavLink to="/taboo" activeStyle={styles.activeLink} style={styles.link} onClick={() => props.clickAction(false)}><h3>Taboo</h3></NavLink>
            <NavLink to="/guesswho" activeStyle={styles.activeLink} style={styles.link} onClick={() => props.clickAction(false)}><h3>Guess Who?</h3></NavLink>
        </div>
    )
}

export default MenuLink
