import React from "react"

import image from '../assets/marvel-moving.gif'
import './Header.scss'

const Header = () => (
    <header className="header" style={styles.header}>
        <div className="container text-left">
            <img 
                className="header-img"
                src={image} 
                alt="marvel-moving.gif" 
                onClick={() => { window.location.href = '/' }}
            />
        </div>
        <nav className="container nav-container">
            <a className="btn btn-warning btn-lg" href="/">Home</a>
            <a className="btn btn-warning btn-lg" href="/favs">Favourites</a>
            <a className="btn btn-warning btn-lg" href="/404">404 page</a>
        </nav>
    </header>
)

const styles = {
    header: {
        marginTop: 30
    }
}

export default Header
