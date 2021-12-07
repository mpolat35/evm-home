import React from 'react'
import cosmos from '../images/yo/cosmos.jpg'


const Deneme = () => {
   return (
      <div className="portfolio-effect">
         <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
            <img className="portfolio-item__image" src={cosmos} alt="Portfolio Item" width="526" height="451"/>
            <div className="portfolio-item__info">
               <h2 className="portfolio-item__header">SEHPALAR</h2>
               <div className="">
                  <h5 className="text-center">Detaylı Bilgi İçin Mağaza İle İletişime Geçiniz</h5>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Deneme


