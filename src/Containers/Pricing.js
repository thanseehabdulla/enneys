import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';

class Pricing extends React.Component{
    render(){
        return(
            <div className="App">
                <NewComponent/>
                <Container>
                    <Row>
                        <Col>
                        <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
          <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check" /></span>Single User</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>5GB Storage</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Unlimited Private Projects</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Dedicated Phone Support</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Free Subdomain</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
          </ul>
          <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
        </div>
      </div>
                        </Col>
                        <Col>
                        <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">Paid</h5>
          <h6 className="card-price text-center">Rs 999<span className="period">/yr</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check" /></span>Single User</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>5GB Storage</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Community Access</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Unlimited Private Projects</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Dedicated Phone Support</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Free Subdomain</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times" /></span>Monthly Status Reports</li>
          </ul>
          <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
        </div>
      </div>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Pricing