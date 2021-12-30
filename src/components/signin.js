import React from 'react'

export default function Signin() {
    return (
        <div className="signin-form">
            <h3 style={{fontSize:35}}><b>Sign In</b></h3><br />
            <input className="inputText" type="text" placeholder="Enter Email or phone number"/><br /><br />
            <input className="inputText" type="text" placeholder="Password"/><br />
            <br />
            <button style={{width:234, padding:4, backgroundColor:"red",color:"white"}}><b>Sign In</b></button><br />
            <input type="checkbox" /><label style={{fontSize:15, color:"grey"}}>Remember Me &emsp;</label>
            <label style={{color:"grey"}}>&emsp;Need help?</label>
            <br /><br /><br />
            <label style={{color:"grey", fontSize:15}}>New to Netflix? <a style={{color:"white", fontSize:15}} href="#">Signup now</a></label>
            <label style={{color:"gray",fontSize:13}}>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</label>
        </div>
    )
}
