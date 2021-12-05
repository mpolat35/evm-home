import React from 'react'
import { Carousel } from 'react-carousel-minimal';


function ProductSlide() {
 const data = [
    {
      image:`/images/kt/armoni.jpg`,
      caption: ""
    },
    {
      image: "/images/kt/kiev.jpg",
      caption: ""
    },
    {
      image: "/images/kt/liza.jpg",
      caption: ""
    },
    {
      image: "/images/kt/lizbon.jpeg",
      caption: ""
    },
    {
      image: "/images/kt/loft.jpeg",
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginBottom:'120px' }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            id="productSlider"
            data={data}
            time={3000}
            width="750px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              width:'600',
              maxWidth: "1050px",
              maxHeight: "500px",
              transition:'none'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSlide;