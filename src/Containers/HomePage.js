import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// header
import NewComponent from '../Components/Topbar';
import Sleek from '../Components/Sleek';
import SleekCards from '../Components/SleekCards';
import Footer from '../Components/Footer';

import CardArray from '../datas/homedata';
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />

        <Sleek />

        <Container>
        <Link to="/viewcategory"><h6 className="align-right">View All Category</h6></Link>

          {CardArray.map(data => (
            <Row className="row">
              <Col xs={12}>
                <SleekCards data={data} />
              </Col>
            </Row>
            
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
