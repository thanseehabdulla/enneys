import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player'

class Sleek extends React.PureComponent {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToScroll: 1
    };
    return (
      <div style={{marginTop:'0px', background:`url(https://media.giphy.com/media/55gIgYWhFhgR5Uz5yf/giphy.gif) no-repeat`,backgroundSize: "cover"}}>
      <Slider {...settings}>
        {Array.from(Array(1)).map(e => (
          <div>
           <ReactPlayer width={1330} height={500} playing={false} url='https://vimeo.com/43401199'/>
          </div>
        ))}
      </Slider>
      </div>
    );
  }
}

export default Sleek;
