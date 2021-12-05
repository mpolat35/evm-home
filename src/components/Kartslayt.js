import React from 'react'
import armoni from '../images/kt/armoni.jpg'
import kiev from '../images/kt/kiev.jpg'
import liza from '../images/kt/liza.jpg'
import lizbon from '../images/kt/lizbon.jpeg'
import loft from '../images/kt/loft.jpeg'
import longlukes from '../images/kt/longlukes.jpg'


function Kartslayt() {
    return (
        <div className="p-3" style={{backgroundColor:'#EAEAEA'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="row">
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row my-3">
                            <div className="col-md-4 col-sm-12">
                                <div className="paper">
                                    <img src={armoni} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Armoni Koltuk Takımı</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="paper">
                                    <img src={kiev} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Kiev Koltuk Takımı</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="paper">
                                    <img src={liza} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-3">Liza Koltuk Takımı</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item my-3">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={lizbon} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Lizbon Koltuk Takımı</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={loft} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Loft Koltuk Takımı</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 my-1">
                                <div className="paper">
                                    <img src={longlukes} className="d-block w-100" alt="..."/>
                                    <div className="d-none d-md-block">
                                        <h5 className="mt-2">Long Lukes Koltuk Takımı</h5>
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

export default Kartslayt
