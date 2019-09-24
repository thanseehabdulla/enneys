import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";

class Sleek extends React.PureComponent{

    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay:true,
            centerMode:true,
            centerPadding:'100px',
            slidesToScroll: 1
          };
          return (
            <Slider {...settings}>
              {Array.from(Array(10)).map(e => <div>
              <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
              </div>)}
            </Slider>
        )
    }
}


export default Sleek