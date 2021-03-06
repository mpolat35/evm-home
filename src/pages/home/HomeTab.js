import React from 'react'
import YeniKartSlayt from '../../components/YeniKartSlayt'

const HomeTab = () => {   
    return (
        <div className="mt-5">
            <h3 className="text-center mb-4">Sizin İçin Seçtiklerimiz</h3>
            <ul className="nav nav-pills mb-3 container-xxl" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-koltuk-tab" data-bs-toggle="pill" data-bs-target="#pills-koltuk" type="button" role="tab" aria-controls="pills-koltuk" aria-selected="true">Koltuk Takımları</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-yemek-tab" data-bs-toggle="pill" data-bs-target="#pills-yemek" type="button" role="tab" aria-controls="pills-yemek" aria-selected="false">Yemek Odası</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-yatak-tab" data-bs-toggle="pill" data-bs-target="#pills-yatak" type="button" role="tab" aria-controls="pills-yatak" aria-selected="false">Yatak Odası</button>
                </li>
            </ul>
            <div className="tab-content py-3" id="pills-tabContent" style={{backgroundColor:'#edf2f7'}} >
                <div className="tab-pane fade show active" id="pills-koltuk" role="tabpanel" aria-labelledby="pills-koltuk-tab"><YeniKartSlayt/></div>
                <div className="tab-pane fade" id="pills-yemek" role="tabpanel" aria-labelledby="pills-yemek-tab"><YeniKartSlayt/></div>
                <div className="tab-pane fade" id="pills-yatak" role="tabpanel" aria-labelledby="pills-yatak-tab"><YeniKartSlayt/></div>
            </div>
        </div>
    )
}

export default HomeTab
