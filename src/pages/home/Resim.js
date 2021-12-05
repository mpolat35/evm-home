import React from 'react'
import berjer from '../../images/berjer.jpg'
import sehpa from '../../images/sehpa.jpg'
import lamba from '../../images/lamba.jpg'
import kitaplık from '../../images/kitaplık.jpg'


function Resim() {
    return (
        <div className="py-5" style={{backgroundColor:'#C2C3CC'}}>
            <div className="container-xxl">
            <div className="row paper py-2">
                <div className="col-lg-6 mb-2">
                    <img src={kitaplık} className="d-block w-100" alt="..."/>
                </div>
                <div className="col-lg-6">
                    <div className="row ">
                        <div className="col-sm-12 col-lg-6 mb-2" >
                        <img src={berjer} className="w-100 " height="510" alt="..."/>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="row mb-2">
                            <img src={sehpa} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="row">
                            <img src={lamba} className="d-block w-100" alt="..."/>
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
