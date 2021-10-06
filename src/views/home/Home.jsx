import React from 'react'

import '../../styles/styles.scss'

import { Header } from '../../components/header/Header'
import { Body } from '../../components/body/Body'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
    return (
        <div className="home-content">
            <Header heading="Películas" />
            <Body />
            <Footer />
        </div>
    )
}
