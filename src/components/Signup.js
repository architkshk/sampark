import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import{Signup} from "../actions/userActions";
import { connect } from "react-redux";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      age:"",
      contactNumber:"",
      password:"",
      address:"",
      city:"",
      state:"",
      diseases:"",
      interests:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.signUp({
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      contactNumber: this.state.contactNumber,
      password: this.state.password,
      address:this.state.address,
      city:this.state.city,
      state:this.state.state,
      diseases:this.state.disease,
      interests:this.state.interests,
    });
    this.setState({
      name:"",
      email:"",
      age:"",
      contactNumber:"",
      password:"",
      address:"",
      city:"",
      state:"",
      diseases:"",
      interests:"",
    });
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" style={{marginTop:"5%"}}>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        onChange={event=>
                          this.setState({
                            name:event.target.value
                          })}
                        required/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="email"
                        onChange={event=>
                          this.setState({
                            email:event.target.value
                          })}
                        required/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="number"
                        placeholder="contact number"
                        onChange={event=>
                          this.setState({
                            contactNumber:event.target.value
                          })}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="number"
                        placeholder="Age"
                        onChange={event=>
                          this.setState({
                            age:event.target.value
                          })}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
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
                        required
                      />
                    </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="address"
                          onChange={event=>
                            this.setState({
                              address:event.target.value
                            })}
                          required
                        />
                    </InputGroup>
                      <Row>
                        <Col>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="text"
                              placeholder="city"
                              onChange={event=>
                                this.setState({
                                  city:event.target.value
                                })}
                              required
                            />
                          </InputGroup>
                        </Col>
                        <Col>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="text"
                              placeholder="state"
                              onChange={event=>
                                this.setState({
                                  state:event.target.value
                                })}
                              required
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="diseases"
                          onChange={event=>
                            this.setState({
                              diseases:event.target.value
                            })}
                          required
                        />
                      </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="interests"
                            onChange={event=>
                              this.setState({
                                interests:event.target.value
                              })}
                            required
                          />
                        </InputGroup>

                    <Button color="primary" block>Create Account</Button>
                  </Form>
                  <a href="./login">
                    Already have account? Log in.
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (p) => {
  return p.users;
};

export default connect(
  mapStateToProps,
  {Signup }
)(signUp);
