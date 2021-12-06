import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';


const YeniKartSlayt = () => {
   return (
      <div style={{backgroundColor:'#edf2f7'}}>
         <div className="container-xxl py-4"  >
            <Carousel
               arrows={true}
               additionalTransfrom={1}
               autoPlaySpeed={3000}
               centerMode={false}
               focusOnSelect={false}
               infinite
               renderButtonGroupOutside={false}
               renderDotsOutside={false}
               responsive={{
                  superLargeDesktop: {
                     breakpoint: { max: 3000, min: 1300 },
                     items: 3,
                  },
                  desktop: {
                     breakpoint: {
                     max: 1300,
                     min: 980,
                     },
                     items: 2,
                     partialVisibilityGutter: 40,
                  },
                  tablet: {
                     breakpoint: {
                     max: 980,
                     min: 600,
                     },
                     items: 2,
                     partialVisibilityGutter: 30,
                  },
                  mobile: {
                     breakpoint: {
                     max: 600,
                     min: 480,
                     },
                     items: 1,
                     partialVisibilityGutter: 30,
                  },
                  miniMobile: {
                     breakpoint: {
                     max: 480,
                     min: 0,
                     },
                     items: 1,
                     partialVisibilityGutter: 30,
                  },
               }}
               showDots={false}
               >
                  <div style={{padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><ProductCard/></div>
                  <div style={{padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><ProductCard/></div>
                  <div style={{padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><ProductCard/></div>
                  <div style={{padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><ProductCard/></div>

            </Carousel>
         </div>
      </div>
      
   )
}

export default YeniKartSlayt
