import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './Containers/AddToDo';
import ToDoListContainer from './Containers/ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation';


// header
import NewComponent from './Components/Topbar'
import Carousal from './Components/3D-Carousal'
import Player from './Components/ReactPlayer'
import Sleek from './Components/Sleek'
import SleekCards from './Components/SleekCards'

function App() {
  return (
    <div className="App">
      <NewComponent />
      <Player />
      <Sleek/>
      <SleekCards/>
      <Carousal />
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
