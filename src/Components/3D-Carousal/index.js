import React from 'react'
import Coverflow from 'react-coverflow';

class Carousal extends React.PureComponent{


 fn = () => {
        /* do your action */
        alert()
      }

    render(){
        return(
<div className="">
<Coverflow width="1960" height="500"
   displayQuantityOfSide={2}
   navigation
   infiniteScroll
   enableHeading
   autoPlay
   media={{
     '@media (max-width: 900px)': {
       width: '100%',
       height: '300px'
     },
     '@media (min-width: 900px)': {
       width: '100%',
       height: '600px'
     }
   }}   
  >
    <div
      onClick={() => this.fn}
      onKeyDown={() => this.fn}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
        alt='title or description'
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
    <video src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
  </Coverflow>
       
      </div>
        )
    }

}

export default Carousal