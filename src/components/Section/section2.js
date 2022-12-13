import React from 'react'
import section2 from '../../images/section2.jpg'

export default function Section2() {
    return (
        <div className="section-1">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="presImg" src={section2} alt="section 2" />
                    </div>
                    <div className="col">
                        <h2 className="title">Download your shows to watch offline.</h2>
                        <h4 className="subTitle">Save your favourites easily and always have something to watch.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
