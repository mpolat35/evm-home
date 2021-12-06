import React from 'react'
import {Link} from "react-router-dom";
import armoni from '../images/kt/armoni.jpg'


const ProductCard = () => {
   return (
      <div className="paper pt-1 pb-3 px-3">
         <div >
            <img src={armoni} className="img-fluid" style={{width:'100%', height:'250px', objectFit:'cover'}} alt="..."/>
            <div >
               <h5>Armoni Koltuk Takımı</h5>
               <Link to={`/yemek-odasi`} style={{textDecoration:'none'}} >
               <button className="btn btn-outline-primary">Ürüne Git</button>
               </Link>

            </div>
         </div>
      </div>
   )
}

export default ProductCard
