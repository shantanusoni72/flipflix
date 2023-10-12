import React from 'react'
import './style.css'
import logo from '../../images/logo.png'

export default function Header() {
    return (
        <div className="header">
            <a href="/"><img className="logo" src={logo} alt="logo" /></a>&emsp;
            <label><a style={{ color: "white", textDecoration: "none" }} href="/watch">Home</a></label>&emsp;
            <label><a style={{ color: "white", textDecoration: "none" }} href="/watch/tvshows">TV Shows</a></label>&emsp;
            <label><a style={{ color: "white", textDecoration: "none" }} href="/watch/movies">Movies</a></label>
        </div>
    )
}
