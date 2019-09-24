import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import Cards from '../Cards'

class Sleek extends React.PureComponent{

    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            autoplay:true,
            slidesToScroll: 1
          };
          return (
            <Slider {...settings}>
              {Array.from(Array(10)).map(e=> <div><Cards/></div>)
              }
            </Slider>
        )
    }
}


export default Sleek