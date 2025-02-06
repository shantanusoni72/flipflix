import React from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';

export default function Hero() {
    const slides = [
        {
            'text': {
                'title': 'Stree 2',
                'desc': 'After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it\'s up to Vicky and his friends to save their town and loved ones.'
            },
            'video': 'assets/slide1.mp4'
        },
        {
            'text': {
                'title': 'Transformers One',
                'desc': 'Witness the untold origin story of Orion Pax (young Optimus Prime) and D-16 (young Megatron). Once brothers-in-arms, see how they turn into sworn enemies and forever change the fate of Cybertron.'
            },
            'video': 'assets/slide2.mp4'
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="hero-container">
            <Carousel infinite={true} responsive={responsive} containerClass='hero-slides' itemClass='hero-slide'>
                {
                    slides.map((item, index) => (
                        <>
                            <video key={index} autoPlay={true} muted={true}>
                                <source src={item.video} type="video/mp4" />
                            </video>
                            <div className="slide-text">
                                <h2>{item.text.title}</h2>
                                <p>{item.text.desc}</p>
                                <label>
                                    <img src="assets/star.svg" alt="rate" />
                                    <span>4.6</span>
                                </label>
                            </div>
                        </>
                    ))
                }
            </Carousel>
        </div >
    )
}
