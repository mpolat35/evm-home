import React from 'react'
import {SRLWrapper} from 'simple-react-lightbox';
import armoni from '../images/kt/armoni.jpg'
import kiev from '../images/kt/kiev.jpg'
import liza from '../images/kt/liza.jpg'
import lizbon from '../images/kt/lizbon.jpeg'
import loft from '../images/kt/loft.jpeg'
import longlukes from '../images/kt/longlukes.jpg'



const Lightbox = () => {
   return (
      <div>
         <div className="row">
         <SRLWrapper>
            <div className="col-sm-12">
               <img src={armoni} className="d-block w-100" alt="..."/>
            </div>
            <div className="row">
            <div className="">
               <img src={kiev} height="90" width="120" className="m-1" alt="..."/>
               <img src={liza} height="90" width="120" className="m-1"alt="..."/>
               <img src={lizbon} height="90"width="120"  className="m-1"alt="..."/>
               <img src={loft} height="90" width="120" className="m-1"alt="..."/>
               <img src={longlukes} height="90" width="120" className="m-1"alt="..."/>
               <img src={loft} height="90" width="120"  className="m-1"alt="..."/>
               <img src={lizbon} height="90"width="120"  className="m-1"alt="..."/>
               <img src={loft} height="90" width="120"className="m-1" alt="..."/>
               <img src={longlukes} height="90" width="120" className="m-1"alt="..."/>
               <img src={loft} height="90" width="120" className="m-1" alt="..."/>
            </div>
            </div>

            </SRLWrapper>
         </div>
      </div>
   )
}

export default Lightbox
