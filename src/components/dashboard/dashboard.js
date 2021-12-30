import React from 'react'
import Header from './header'
import Recommeded from './recommeded'
import Videos from './videos'
import Footer from '../footer'

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div class="panel">
                <Recommeded />
                <Videos />
                <Footer />
            </div>
        </div>
    )
}
