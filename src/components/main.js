import React from 'react'
import Carousel from './carousel';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Faq from './faq';
import Sub_Footer from './sub_footer';
import Footer from './footer'
import SignIn from './signin'
import { useState } from 'react'
import Dashboard from './dashboard/dashboard';

export default function Main() {
    const [showSignin, setSignin] = useState(false)
    const [showSignup, setSignup] = useState(false)
    const [showWatch, setWatch] = useState(false)
    return (showSignin ? <><div className="App-1"><br /><br /><br /><br /><SignIn /><br /><br /><br /><Footer /></div></> : (showWatch) ? <Dashboard /> :
        <div className="App">
            <div className="App-1" style={{ color: "white", height: 750 }}>
                <h3 style={{ color: "black" }}>_</h3>
                <div class="container">
                    <div class="row">
                        <div class="col" style={{ textAlign: "left", padding: 0 }}>
                            <div>
                                <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/movie-thumb-imgs%2Flogo.png?alt=media&token=769404e3-8745-4120-9423-d8f48d1ac5a9" />
                            </div>
                        </div>
                        <div class="col" style={{ textAlign: "right" }}>
                            <div>
                                <button onClick={() => setWatch(true)} class="btn">Watch</button>&emsp;
                                <button onClick={() => setSignin(true)} type="button" class="btn">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: 70 }}></div>
                <Carousel />
            </div>
            <div className="divider" />
            <div className="section">
                <Section1 />
            </div>
            <div className="divider" />
            <div>
                <Section2 />
            </div>
            <div className="divider" />
            <div>
                <Section3 />
            </div>
            <div className="divider" />
            <div>
                <Section4 />
            </div>
            <div className="divider" />
            <div>
                <Faq />
            </div>
            <div>
                <Sub_Footer />
            </div>
            <div className="divider" />
            <div style={{ backgroundColor: "black" }}>
                <Footer />
            </div>
        </div>);
}
