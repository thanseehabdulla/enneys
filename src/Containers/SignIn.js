import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'

class SignIn extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />
        <Container>
        <Row>
          <Col>
            <div className="card card-signin my-5">
              <div className="card-body">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                  <div className="form-label-group" style={{marginTop:'10px'}}>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  </div>
                  
                  <button style={{marginTop:'10px'}} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="my-4" />
              </div>
              <Link to="/signup"><p>Create a New Account</p></Link>
              </div>
          </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
