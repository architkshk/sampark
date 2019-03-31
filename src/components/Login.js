import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {connect} from "react-redux";
import {logIn} from "../actions/userActions";
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile:"",
      password:"",
      redirect:false
    };
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.logIn({
      mobile: this.state.mobile,
      password: this.state.password,
    });
    this.setState({
      mobile:"",
      password:"",
      redirect:true
    });
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container >
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" style={{marginTop:"5%"}}>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form
                    onSubmit={this.handleSubmit}
                  >
                    <h2>Login</h2>
                    <p
                      className="text-muted">
                      Sign In to your account
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        pattern="[0-9]{10}"
                        maxLength="12"
                        type="tel"
                        placeholder="Contact Number"
                        onChange={event=>
                          this.setState({
                            mobile:event.target.value
                          })}
                        required />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        onChange={event=>
                          this.setState({
                            password:event.target.value
                          })}
                        required />
                    </InputGroup>
                    <Button
                      color="primary"
                      className="px-4"
                      block
                    >
                      Login
                    </Button>
                  </Form>
                  <a href="./signup">
                    Create a new Account
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.renderRedirect()}
      </div>
    );
  }
}

const mapStateToProps = (p) => {
  return p.users;
};

export default connect(
  mapStateToProps,
  {logIn }
)(Login);
