import React from 'react'
import {Link} from "react-router-dom";
import './KoltukTakimi.css'
import armoni from '../../images/kt/armoni.jpg'
import kiev from '../../images/kt/kiev.jpg'
import liza from '../../images/kt/liza.jpg'
import lizbon from '../../images/kt/lizbon.jpeg'
import loft from '../../images/kt/loft.jpeg'
import longlukes from '../../images/kt/longlukes.jpg'


const Koltuktakimi = () => {
    return (
        <div className="container-xxl">
            <h4 className="text-primary my-3">Koltuk Takımları</h4>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <Link to={`/yemek-odasi`} style={{textDecoration:'none'}} >
                    <div className="paper">
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="paper">
                        <img src={kiev} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Kiev Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={longlukes} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Long Lukes Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={liza} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Liza Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={lizbon} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Lizbon Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={loft} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Loft Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Koltuktakimi
