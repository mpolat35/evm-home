import React from 'react'
import berjer1 from '../../images/berjer1.jpg'
import sehpa from '../../images/sehpa.jpg'
import lamba from '../../images/lamba.jpg'
import kitaplık from '../../images/kitaplık.jpg'


function Resim() {
    return (
        <div className="py-5" style={{backgroundColor:'#C2C3CC'}}>
            <div className="container-xxl">
            <div className="row paper py-2">
                <div className="col-lg-6 mb-2">
                <div className="portfolio-effect">
                    <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
                    <img src={kitaplık} className="img-fluid" alt="..."/>
                        <div className="portfolio-item__info">
                        <h2 className="portfolio-item__header">KİTAPLIK</h2>
                        <div className="">
                            <h5 className="text-center">Detaylı Bilgi İçin Mağaza İle İletişime Geçiniz</h5>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="row ">
                        <div className="col-sm-12 col-lg-6 mb-2" >
                        <div className="portfolio-effect">
                            <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
                            <img src={berjer1} className="img-fluid" alt="..."/>
                                <div className="portfolio-item__info">
                                <h2 className="portfolio-item__header">BERJER</h2>
                                <div className="">
                                    <h5 className="text-center">Detaylı Bilgi İçin Mağaza İle İletişime Geçiniz</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="row mb-2">
                            <div className="portfolio-effect">
                                <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
                                <img src={sehpa} className="img-fluid" alt="..."/>
                                    <div className="portfolio-item__info">
                                    <h2 className="portfolio-item__header">SEHPA</h2>
                                    <div className="">
                                        <h5 className="text-center">Detaylı Bilgi İçin Mağaza İle İletişime Geçiniz</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="portfolio-effect">
                                <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
                                    <img src={lamba} className="img-fluid" alt="..."/>
                                        <div className="portfolio-item__info">
                                        <h2 className="portfolio-item__header">LAMBA</h2>
                                        <div className="">
                                            <h5 className="text-center">Detaylı Bilgi İçin Mağaza İle İletişime Geçiniz</h5>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Resim
