import React from 'react'

export default function Sub_Footer() {
    return (
        <div className="end">
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5><br />
            <div style={{backgroundColor:"black"}}>
                <input className="email" type="text" placeholder="Enter Address"  />
                <button className="signin">Get Started!</button>
            </div>
            <br />
        </div>
    )
}
