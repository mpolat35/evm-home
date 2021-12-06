import React from 'react'
import YeniKartSlayt from '../../components/YeniKartSlayt'
import './Home.css'
import HomeIcon from './HomeIcon'
import HomeSlider from './HomeSlider'
import HomeTab from './HomeTab'
import Resim from './Resim'


const HomePage = () => {
    return (
        <div className="">
            <section><HomeSlider/></section>
            <section><HomeTab/></section>
            <section><Resim/></section>
            <section><HomeIcon/></section>
            <section><YeniKartSlayt/></section>
        </div>
    )
}

export default HomePage
