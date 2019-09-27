import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'

class Support extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />
        <Container>
        <Row>
          <Col>
          <div>
        <div className="">
          <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
          <h4>We would love to hear from you !</h4>
        </div>
        <div className="col-md-12">
          <div className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
              <div className="col-sm-12">          
                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
              <div className="col-sm-12">          
                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">Email:</label>
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
              <div className="col-sm-12">
                <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
              </div>
            </div>
            <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-12">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
        </div></div>

          </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Support;
