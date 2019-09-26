import React from 'react';
import Container from 'react-bootstrap/Container';


class NewComponent extends React.PureComponent{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
        <Container>
           
           <a className="navbar-brand" href="#">Enneys</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item active">
                  <a className="nav-link" href="#">Episode <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Counselling</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Classes
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">LKG</a>
                    <a className="dropdown-item" href="#">UKG</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">1st STD</a>
                  </div>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </Container>

          </nav>
              )
    }
}

export default NewComponent