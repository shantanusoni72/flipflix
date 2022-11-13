import React from 'react'
import Header from './header'
import Shelf from './shelf'
import Footer from '../footer'

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className="panel">
                <Shelf />
                <Footer />
            </div>
        </div>
    )
}
