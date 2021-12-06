import React from 'react'
import Lightbox from '../components/Lightbox'
import ProductAcordion from '../components/ProductAcordion'
import ProductTable from '../components/ProductTable'
import YeniKartSlayt from '../components/YeniKartSlayt'




const YemekOdasiPage = () => {
    return (
        <div className=""  >
            <div className="container-xxl">
            <h2>Armoni Koltuk Takımı</h2>
            <div className="row mx-0">
                <div className="col-lg-6">
                    <Lightbox/>
                </div>
                <div className="col-lg-6">
                    <div className="col-sm-12 mb-3 mx-0">
                        <ProductTable/>
                    </div>
                    <div className="col-sm-12">
                        <ProductAcordion/>
                    </div>
                    <button className="btn btn-primary my-3">Mağaza İle İletişime Geçiniz</button>
                </div>
            </div>

            </div>

            <div className="mt-3 pb-3" style={{backgroundColor:'#edf2f7'}}>
                <div className="container-xxl">
                <h4 className="pt-5 ps-2">Benzer Ürünler</h4>
                <YeniKartSlayt/>
                </div>
            
            </div>


        </div>
    )
}

export default YemekOdasiPage
