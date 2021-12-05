import React from 'react'

const ProductTable = () => {
    return (
        <div className="paper">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Takım İçeriği</th>
                    </tr>
                </thead>
                <tbody>          
                    <tr>
                        <td>3'lü Kanepe</td>
                        <td>1 Adet</td>
                    </tr>
                    <tr>
                        <td>2'li Kanepe</td>
                        <td>1 Adet</td>
                    </tr>
                    <tr>
                        <td>Berjer</td>
                        <td>2 Adet</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
