import React from 'react'
import './Home.css'
import HomeIcon from './HomeIcon'
import HomeSlider from './HomeSlider'
import HomeTab from './HomeTab'
import Resim from './Resim'
import Tab2 from './Tab2'


const HomePage = () => {
    return (
        <div className="">
            <section><HomeSlider/></section>
            <section><HomeTab/></section>
            <section><Tab2/></section>
            <section><Resim/></section>
            <section><HomeIcon/></section>
        </div>
    )
}

export default HomePage
