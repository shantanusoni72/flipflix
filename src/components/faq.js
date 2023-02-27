import React from 'react'

export default function Faq() {
    return (
        <div className="faq-1">
            <h1><b>Frequently Asked Questions</b></h1><br />
            <div className="dropdown">
                <button className="dropbtn">What is Openflix?</button>
                <div className="dropdown-content">
                    <p>
                    Openflix is a netflix-inspired open source web application where users can browse, search and see reviews of movies
                    and TV shows.
                    </p>
                </div>
            </div><br />

            <div className="dropdown">
                <button className="dropbtn">How can I contribute to this awersome project?</button>
                <div className="dropdown-content">
                    <p>
                    Thank you for showing interest in this project. This project source code is proudly hosted on github at https://github.com/shantanusoni72/Openflix where you can contribute.
                    </p>
                </div>
            </div>
        </div>
    )
}
