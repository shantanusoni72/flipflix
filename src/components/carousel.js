import React from 'react'

export default function Carousel() {
    return (
        <div>
            <p style={{ fontFamily: "sans-serif", fontSize: 63, lineHeight: 1 }}><b>Unlimited movies, TV
                <br />shows and more.</b></p>
            <p style={{ fontFamily: "sans-serif", fontSize: 25 }}><b>Watch anywhere. Cancel anytime.</b></p>
            <p style={{ fontFamily: "sans-serif", fontSize: 15 }}><b>Ready to watch? Enter your email to create or restart your membership.Email address</b></p>
            <form>
                <input style={{ padding: 22, width: 538 }} className="email" type="text" placeholder="Email Address" required />
                <button style={{ padding: 22 }} className="signin"><b>Get Started 〉</b></button>
            </form>
        </div>
    )
}
