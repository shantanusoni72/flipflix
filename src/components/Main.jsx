import Carousel from './Carousel';
import Section from './Section/Section';
import Faq from './Faq';
import SubFooter from './SubFooter';
import Footer from './Footer'
import Home from './Navbar'

export default function Main() {
    return (
        <div className="App">
            <div className="App-inner">
                <Home />
                <div className='space'></div>
                <Carousel />
            </div>
            <Section />
            <Faq />
            <SubFooter />
            <Footer />
        </div>
    );
}
