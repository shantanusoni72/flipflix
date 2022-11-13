import React from 'react'

export default function Header() {
    return (
        <div>
            <div style={{ backgroundColor: "black", padding: 18 }}>
                <a href="/"><img class="logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/logo.png?alt=media&token=3cb9e5c0-543e-4671-94be-98324dbcbbef" alt="logo" /></a>&emsp;
                <label style={{ color: "white" }}>Home</label>&emsp;
                <label style={{ color: "white" }}>TV Shows</label>&emsp;
                <label style={{ color: "white" }}>Movies</label>
            </div>
        </div>
    )
}
