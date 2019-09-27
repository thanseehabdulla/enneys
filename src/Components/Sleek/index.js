import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';

class Sleek extends React.PureComponent {
  render() {
    var settings = {
      
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      
  
  // fade: true,
  // cssEase: 'linear',
      responsive: [
        {
          breakpoint: 2024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            variableWidth: true,
            width:'100%',
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            dots: true,
            variableWidth: true,
            width:'100%',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            variableWidth: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div style={{marginTop:'0px',backgroundSize: "cover", height: '370px'}}>
     {/* <Container> */}
      <Slider {...settings}>
        {Array.from(Array(6)).map(e => (
          <div style={{margin:'0 10px'}}>
           <ReactPlayer style={{margin:'0 10px'}} playing={false} url='https://vimeo.com/43401199'/>
          </div>
        ))}
      </Slider>
      {/* </Container> */}
      </div>
    );
  }
}

export default Sleek;
