import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'

class SignUp extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />
        <Container>
        <Row>
          <Col>
            <div className="card card-signin my-5">
              <div className="card-body">
                    <input type="text" style={{marginTop:'10px'}} id="inputEmail" className="form-control" placeholder="Full Name" required autofocus />
                    <input type="email" style={{marginTop:'10px'}} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <input type="tel" style={{marginTop:'10px'}} id="inputEmail" className="form-control" placeholder="Phone" required autofocus />
                  
                  <div className="form-label-group" style={{marginTop:'10px'}}>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  </div>
                  <div className="form-label-group" style={{marginTop:'10px'}}>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Confirm Password" required />
                  </div>
                  
                  <button style={{marginTop:'10px'}} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
                  <hr className="my-4" />
              </div>
              </div>
          </Col>
          </Row>
          <Link to="/signin"><p>Go Back to Sign in</p></Link>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
