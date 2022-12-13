import React from 'react'
import section3 from '../../images/section3.png'

export default function Section3() {
    return (
        <div className="section-1">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="title">Watch everywhere.</h2>
                        <h4 className="subTitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
                    </div>
                    <div className="col">
                        <img className="presImg" src={section3} alt="section 3" />
                    </div>
                </div>
            </div>
        </div>
    )
}
