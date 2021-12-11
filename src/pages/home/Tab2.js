import React from 'react'
import YeniKartSlayt from '../../components/YeniKartSlayt'

const Tab2 = () => {   
    return (
        <div className="mt-3">
            <ul className="nav nav-pills mb-3 container-xxl" id="pills-tab" role="tablist">
             <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-genc-tab" data-bs-toggle="pill" data-bs-target="#pills-genc" type="button" role="tab" aria-controls="pills-genc" aria-selected="false">Genç Odası</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-mutfak-tab" data-bs-toggle="pill" data-bs-target="#pills-mutfak" type="button" role="tab" aria-controls="pills-mutfak" aria-selected="false">Mutfak Takımı</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-baza-tab" data-bs-toggle="pill" data-bs-target="#pills-baza" type="button" role="tab" aria-controls="pills-baza" aria-selected="false">Yatak & Baza</button>
                </li>
            </ul>
            <div className="tab-content py-3" id="pills-tabContent" style={{backgroundColor:'#edf2f7'}} >
                <div className="tab-pane fade" id="pills-genc" role="tabpanel" aria-labelledby="pills-genc-tab"><YeniKartSlayt/></div>
                <div className="tab-pane fade" id="pills-mutfak" role="tabpanel" aria-labelledby="pills-mutfak-tab"><YeniKartSlayt/></div>
                <div className="tab-pane fade" id="pills-baza" role="tabpanel" aria-labelledby="pills-baza-tab"><YeniKartSlayt/></div>
            </div>
        </div>
    )
}

export default Tab2
