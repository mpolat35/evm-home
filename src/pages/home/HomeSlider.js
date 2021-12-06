import React from 'react'
import slayt1 from '../../images/slayt1.jpg'
import slayt2 from '../../images/slayt2.jpg'
import slayt3 from '../../images/slayt3.jpg'


const HomeSlider = () => {
    return (
        <div className="container-xxl" style={{maxHeight:'800px'}} >
            <div id="carousel_1" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active" data-bs-interval="4000">
                    <img src={slayt1} className="d-block w-100 radius-30" style={{maxHeight:'800px'}}  alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Hector Yemek Odası</h1>
                        <p>Enerji ve farklı bir sadeliği tercih edenlerin seçimi. Hector yemek odası takımı...</p>
                        <button className="btn btn-outline-primary">Ürünü İnceleyin</button>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                    <img src={slayt2} className="d-block w-100 radius-30" style={{maxHeight:'800px'}}  alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                         <h1>Hector Yemek Odası</h1>
                        <p>Enerji ve farklı bir sadeliği tercih edenlerin seçimi. Hector yemek odası takımı...</p>
                        <button className="btn btn-outline-primary">Ürünü İnceleyin</button>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={slayt3} className="d-block w-100 radius-30" style={{maxHeight:'800px'}}  data-bs-interval="4000" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Pro Delta Room</h1>
                        <p>Enerji ve farklı bir sadeliği tercih edenlerin seçimi. Hector yemek odası takımı...</p>
                        <button className="btn btn-outline-primary">Ürünü İnceleyin</button>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeSlider
