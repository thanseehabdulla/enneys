import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'

class NewComponent extends React.PureComponent{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
        <Container>
           
           <a className="navbar-brand" href="#"><Link to="/">ENNAYS</Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to="/viewcategory">VIEW ALL CATEGORY <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/pricing">PRICING <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/support">SUPPORT <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/signin">LOGIN <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            </div>
          </Container>

          </nav>
              )
    }
}

export default NewComponent