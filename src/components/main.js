import React from 'react'
import Carousel from './carousel';
import Section1 from './Section/section1';
import Section2 from './Section/section2';
import Section3 from './Section/section3';
import Faq from './faq';
import SubFooter from './sub_footer';
import Footer from './footer'
import Home from './navbar'

export default function Main() {
    return (
        <div className="App">
            <div className="App-1" style={{ color: "white", height: 750 }}>
                <h3 style={{ color: "black" }}>_</h3>
                <Home />
                <div className='space'></div>
                <Carousel />
            </div>
            <div className="divider" />
                <Section1 />
            <div className="divider" />
                <Section2 />
            <div className="divider" />
                <Section3 />
            <div className="divider" />
                <Faq />
                <SubFooter />
            <div className="divider" />
            <div style={{ backgroundColor: "black" }}>
                <Footer />
            </div>
        </div>);
}
