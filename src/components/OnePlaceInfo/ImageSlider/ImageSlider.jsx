import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { rentData } from "../../OfferBlock/OfferCard/data";
// import { baseUrl } from "./config";

export default function ImageSlider(){
        const settings = {
          customPaging: function(i) {
            return (
              <a>
                <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
              </a>
            );
          },

          dots: true,
          dotsClass: "slick-dots slick-thumb",
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    
    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {images.map((el) =>   <div>
            <h3>{el.id}</h3>
          </div>)}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

        // <div>
        //     <Slider>
        //         {rentData.map((item) =>(
        //             <div><img src={item.linkImg[0]}/></div>
        //         ))}
        //     </Slider>
        // </div>
    )

}