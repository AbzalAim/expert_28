import React from 'react'
import Hero from '../components/Landing/Hero'
import Valuation from '../components/Landing/Valuation'
import Works from '../components/Landing/Works'
import WorksPrice from '../components/Landing/WorksPrice'
import PublicOpinion from '../components/Landing/PublicOpinion'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import Contact from '../components/Landing/Contact'

const Home = () => {
    return (
        <div className='landingBody'>
            <Header />
            <main>
                <Hero />
                <Valuation />
                <Works />
                <WorksPrice />
                <PublicOpinion />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home