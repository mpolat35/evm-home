import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

   return (
      <div className="header-border">
      <div classNameName="">
         <nav className="navbar navbar-expand-xl navbar-light bg-white">
            <div className="container-xxl">
               <Link to={`/`} style={{textDecoration:'none'}} >
                  <div className="nav-brand" >EVM HOME</div>
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                  <Link to={`/koltuk-takimi`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Koltuk Takımı</div>
                  </li>
                  </Link>

                  <Link to={`/yemek-odasi`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Yemek Odası</div>
                  </li>
                  </Link>

                  <Link to={`/yatak-odasi`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Yatak Odası</div>
                  </li>
                  </Link>

                  <Link to={`/genc-odasi`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Genç Odası</div>
                  </li>
                  </Link>

                  <Link to={`/mutfak-mobilyasi`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Mutfak Mobilyası</div>
                  </li>
                  </Link>

                  <Link to={`/yatak-baza`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link ">Yatak&Baza</div>
                  </li>
                  </Link>

                  <Link to={`/iletisim`} style={{textDecoration:'none'}} >
                  <li className="nav-item">
                     <div className="nav-link">İletişim</div>
                  </li>
                  </Link>

                  </ul>
               </div>
            </div>
            </nav>
      </div>
      </div>
   )
}

export default Header



