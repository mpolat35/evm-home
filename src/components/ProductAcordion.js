import React from 'react'

const ProductAcordion = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" color="secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Açıklama
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                <table className="table">
                    <tbody>
                        <tr>
                            <td>2 Adet Üçlü Koltuk</td>
                        </tr>
                        <tr>
                            <td>1 Adet Berjer</td>
                        </tr>
                        <tr>
                            <td>Sırt atlamalı özelliği ile yatak olarak da kullanabilirsiniz.</td>
                        </tr>
                        <tr>
                            <td>Fırınlanmış 1.sınıf gürgen ağacı ile yıllarca kullanabilirsiniz</td>
                        </tr>
                        <tr>
                            <td>Koltuk kumaşları silinebilir ve kuru temizleme yapılabilme özelliğine sahiptir.</td>
                        </tr>
                        <tr>
                            <td>Armoni  koltuk takımının ayakları ahşaptır ve zemine zarar vermez.</td>
                        </tr>
                        <tr>
                            <td>Ürünleri tekil olarak alabilirsiniz.</td>
                        </tr>
                    </tbody>
                </table>
                
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductAcordion
