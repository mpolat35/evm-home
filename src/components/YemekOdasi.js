import React from 'react'
import cosmos from '../images/yo/cosmos.jpg'
import elit from '../images/yo/elit.jpg'
import loca from '../images/yo/loca.jpg'
import modelina from '../images/yo/modelina.jpg'
import oslo from '../images/yo/oslo.jpg'
import bugatti from '../images/yo/bugatti.jpg'



function YemekOdasi() {
    return (
        <div className="container-xxl">
            <div id="" className="carousel slide" data-bs-ride="carousel">
                <div className="row">
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row my-3">
                            <div className="col-md-4 col-sm-12">
                                <div className="paper">
                                    <img src={cosmos} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Cosmos Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="paper">
                                    <img src={elit} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Elit Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="paper">
                                    <img src={loca} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Loca Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item my-3">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={modelina} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Modelina Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={oslo} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Oslo Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={bugatti} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Bugatti Yemek Odası</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default YemekOdasi

