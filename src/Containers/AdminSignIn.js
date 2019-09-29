import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link, withRouter } from 'react-router-dom'

class SignIn extends React.Component {

  state={
    email:'',
    password:''
  }

  onChangeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit = () =>{
    if(this.state.email === 'ennayadmin' && this.state.password === 'ennayp'){
      localStorage.setItem("loggedin",true)
      window.location.href = "/dashbaord"
      alert("sucess")
    }else{
      alert("invalid")

    }
  }

  render() {
    return (
      <div className="App">
        <NewComponent />
        <Container>
        <Row>
          <Col>
            <div className="card card-signin my-5">
              <div className="card-body">
                    <input name="email" type="email" id="inputEmail" onChange={this.onChangeHandler} className="form-control" placeholder="Email address" required autofocus />
                  <div className="form-label-group" style={{marginTop:'10px'}}>
                    <input name="password" type="password" onChange={this.onChangeHandler} id="inputPassword" className="form-control" placeholder="Password" required />
                  </div>
                  
                  <button onClick={this.submit} onstyle={{marginTop:'20px'}} className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
                  <hr className="my-4" />
              </div>
              </div>
          </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignIn);
