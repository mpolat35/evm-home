import React from 'react'
import Kartslayt from '../../components/Kartslayt'
import ProductAcordion from '../../components/ProductAcordion'
import ProductTable from '../../components/ProductTable'
import ProductSlide from './ProductSlide'

const ProductPage = () => {
    return (
        <div className="container-xxl mb-5">
            <h2>Armoni Koltuk Takımı</h2>
            <div className="row mx-0">
                <div className="col-lg-7">
                    <ProductSlide/>
                </div>
                <div className="col-lg-5">
                    <div className="col-sm-12 mb-3 mx-0">
                        <ProductTable/>
                    </div>
                    <div className="col-sm-12">
                        <ProductAcordion/>
                    </div>
                </div>
            </div>
            <h2>Benzer Ürünler</h2>
            <Kartslayt/>
        </div>
    )
}

export default ProductPage
