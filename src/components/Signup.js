import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { Signup } from "../actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      mobile: "",
      password: "",
      address: "",
      city: "",
      state: "",
      diseases: "",
      interests: "",
      redirect: false,
      cities: [],
      states: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let states = await axios.get("http://localhost:5000/data/states");
    states = states.data;
    this.setState({ states });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.Signup({
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      mobile: this.state.mobile,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      diseases: this.state.diseases,
      interests: this.state.interests
    });
    this.setState({
      name: "",
      email: "",
      age: "",
      mobile: "",
      password: "",
      address: "",
      city: "",
      state: "",
      diseases: "",
      interests: "",
      redirect: true
    });
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" style={{ marginTop: "5%" }}>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        onChange={event =>
                          this.setState({
                            name: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="email"
                        onChange={event =>
                          this.setState({
                            email: event.target.value
                          })
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="tek"
                        pattern="[0-9]{12}"
                        maxLength="12"
                        placeholder="Contact Number"
                        onChange={event =>
                          this.setState({
                            mobile: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="number"
                        placeholder="Age"
                        onChange={event =>
                          this.setState({
                            age: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="PIN"
                        maxLength="4"
                        pattern="[0-9]{4}"
                        minLength="4"
                        onChange={event =>
                          this.setState({
                            password: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Address"
                        onChange={event =>
                          this.setState({
                            address: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <Row>
                      <Col>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText />
                          </InputGroupAddon>
                          <Input
                            type="select"
                            placeholder="State"
                            required
                            value={this.state.state}
                            onChange={async event => {
                              let state = event.target.value;
                              let { stateId } = this.state.states.filter(
                                s => s.value === state
                              )[0];
                              let cities = await axios.get(
                                `http://localhost:5000/data/cities/${stateId}`
                              );
                              cities = cities.data;
                              this.setState({
                                cities,
                                state
                              });
                            }}
                          >
                            <option disabled>
                              Select
                            </option>

                            {this.state.states.map(e => (
                              <option>{e.value}</option>
                            ))}
                          </Input>
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText />
                          </InputGroupAddon>
                          <Input
                            type="select"
                            placeholder="City"
                            onChange={event =>
                              this.setState({
                                city: event.target.value
                              })
                            }
                            value={this.state.city}
                            required
                          >
                            <option disabled>
                              Select
                            </option>
                            {this.state.cities.map(e => (
                              <option>
                                {e.value}
                              </option>
                            ))}
                          </Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Diseases"
                        onChange={event =>
                          this.setState({
                            diseases: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText />
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Interests"
                        onChange={event =>
                          this.setState({
                            interests: event.target.value
                          })
                        }
                        required
                      />
                    </InputGroup>

                    <Button color="primary" block>
                      Create Account
                    </Button>
                  </Form>
                  <a href="./login">Already have account? Log in.</a>
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

const mapStateToProps = p => {
  return p.users;
};

export default connect(
  mapStateToProps,
  { Signup }
)(signUp);