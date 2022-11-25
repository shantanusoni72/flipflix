import React from 'react'

export default function Carousel() {
    return (
        <div className="carousel">
            <p className="heading"><b>Unlimited movies, TV
                <br />shows and more.</b></p>
            <p className="subHeading"><b>Watch anywhere. Cancel anytime.</b></p>
            <p className="subHeading"><b>Ready to watch? Enter your email to create or restart your membership.Email address</b></p>
            <input className="email" type="text" placeholder="Email Address" required />
            <button className="signin"><b>Get Started 〉</b></button>
        </div>
    )
}
