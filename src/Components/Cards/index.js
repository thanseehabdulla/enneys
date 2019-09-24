import React from 'react'


class Cards extends React.PureComponent{
    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
       <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        )
    }
}

export default Cards