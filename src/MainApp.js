import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './Containers/AddToDo';
import ToDoListContainer from './Containers/ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation';

import InputForm from './InputForm'

function App() {
  return (
    <div className="App">
      <InputForm/>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>My New React Bootstrap SPA</h1>
            <Button>Look, I'm a button!</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <AddToDo />
            <ToDoListContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
