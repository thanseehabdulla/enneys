import React from 'react';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/Container';
import NewComponent from '../Dashboard/Components/Topbar';
import Footer from '../Dashboard/Components/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'


import Home from '../Dashboard/Containers/Home'

class Dashboard extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="App">
        <Container>
          <NewComponent />
        </Container>
        <Row>
          <Col>
            <div class="sidenav">
              <Link to="/dashboard">About</Link>
              <Link to="/dashboard/pric">Services</Link>
              <Link to="/dashboard/support">Clients</Link>
              <Link to="/dashboard/dashboard">Contact</Link>
            </div>
          </Col>
          <Col>
            <Router>
              <Route exact path="/pric" component={Home} />
              <Route exact path="/support" component={Home} />
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/" component={Home} />
            </Router>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
