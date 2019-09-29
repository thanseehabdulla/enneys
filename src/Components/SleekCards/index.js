import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import Cards from '../Cards'
import {Link} from 'react-router-dom'
class Sleek extends React.PureComponent{

    render(){

      const {data} = this.props

      var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            // slidesToShow: 7,
            autoplay:false,
            // slidesToScroll: 7,
            responsive: [
              {
                breakpoint: 2024,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 7,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  variableWidth:true,
                  arrows:false
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          };
          return (
            <div>
              <h2 class="tray-title">{data.category}<i class="right-arrow slide-in-left"></i></h2>
            <Slider {...settings}>
              {(data.data||[]).map(subdata=> <div><Cards data={subdata} /></div>)
              }
            </Slider>
            <Link to="/viewlisting"><h6 className="align-right">View All </h6></Link>

            </div>
        )
    }
}


export default Sleek