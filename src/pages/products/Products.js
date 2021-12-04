import React from 'react'
import './Products.css'
import armoni from '../../images/kt/armoni.jpg'
import kiev from '../../images/kt/kiev.jpg'
import ProductSlide from '../product/ProductSlide'


const ProductsPage = () => {
    return (
        <div className="container-xxl">
            <h4 className="text-primary my-3">Koltuk Takımları</h4>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="paper">
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
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
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="paper">
                        <img src={armoni} className="d-block w-100" alt="..."/>
                        <div className="d-none d-md-block">
                            <h5 className="mt-1">Armoni Koltuk Takımı</h5>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>
            <h5>Ürün Slaytı</h5>
            <ProductSlide/>
        </div>
    )
}

export default ProductsPage
