import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './Containers/AddToDo';
import ToDoListContainer from './Containers/ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
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
