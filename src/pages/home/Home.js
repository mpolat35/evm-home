import React from 'react'
import './Home.css'
import HomeSlider from './HomeSlider'
import HomeTab from './HomeTab'
import Resim from './Resim'


const HomePage = () => {
    return (
        <div className="">
            <section><HomeSlider/></section>
            <section><HomeTab/></section>
            <section><Resim/></section>
        </div>
    )
}

export default HomePage
