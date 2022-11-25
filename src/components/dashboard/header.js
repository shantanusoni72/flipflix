import React from 'react'

export default function Header() {
    return (
        <div>
            <div style={{ backgroundColor: "black", padding: 18 }}>
                <a href="/"><img class="logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/logo.png?alt=media&token=3cb9e5c0-543e-4671-94be-98324dbcbbef" alt="logo" /></a>&emsp;
                <label><a style={{ color: "white", textDecoration:"none" }} href="/watch">Home</a></label>&emsp;
                <label><a style={{ color: "white", textDecoration:"none" }} href="/watch/tvshows">TV Shows</a></label>&emsp;
                <label><a style={{ color: "white", textDecoration:"none" }} href="/watch/movies">Movies</a></label>
            </div>
        </div>
    )
}
