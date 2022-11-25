import React from 'react'

export default function navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ textAlign: "left", padding: 0 }}>
                    <div>
                        <a href="/"><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/logo.png?alt=media&token=3cb9e5c0-543e-4671-94be-98324dbcbbef" alt="logo" /></a>
                    </div>
                </div>
                <div className="col" style={{ textAlign: "right" }}>
                    <div>
                        <a className="btn" href="/watch">Watch</a>&emsp;
                    </div>
                </div>
            </div>
        </div>
    )
}
