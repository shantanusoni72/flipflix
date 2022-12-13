import React from 'react'
import logo from '../images/logo.png'

export default function navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ textAlign: "left", padding: 0 }}>
                    <div>
                        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
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
