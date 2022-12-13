import React from 'react'
import section1 from '../../images/section1.png'

export default function Section1() {
    return (
        <div className="section-1">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="title">Enjoy on your TV.</h2>
                        <h4 className="subTitle">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                    </div>
                    <div className="col">
                        <img className="presImg" src={section1} alt="section 1" />
                    </div>
                </div>
            </div>
        </div>
    )
}
