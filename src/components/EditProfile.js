import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import CardHeader from "reactstrap/es/CardHeader";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        Name: "",
        age: "",
        contactNumber: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        interest: "",
        disease: "",
        bio: "",
        picture: ""
      }
    };
  }

  onCreate = event => {
    event.preventDefault();
    alert("authemticate group creation");
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center font-weight-bold">
            <Col md="9" lg="7" xl="6" style={{ marginTop: "5%" }}>
              <Card className="mx-8">
                <CardHeader className="text-center">Edit Profile</CardHeader>
                <CardBody className="p-4">
                  <Form onSubmit={this.onCreate}>
                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="group name"
                        value="Mitansha Agrawal"
                        required
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              Name: event.target.value
                            }
                          })
                        }
                        disabled
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Age</Label>
                      <Input
                        type="number"
                        name="age"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              age: event.target.value
                            }
                          })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Contact Number</Label>
                      <Input
                        type="number"
                        name="number"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              contactNumber: event.target.value
                            }
                          })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Address</Label>
                      <Input
                        type="text"
                        name="address"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              address: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label> City</Label>
                          <Input
                            type="text"
                            name="city"
                            onChange={event =>
                              this.setState({
                                profile: {
                                  ...this.state.profile,
                                  city: event.target.value
                                }
                              })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label> State</Label>
                          <Input
                            type="text"
                            name="state"
                            onChange={event =>
                              this.setState({
                                profile: {
                                  ...this.state.profile,
                                  state: event.target.value
                                }
                              })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>Pin Code</Label>
                          <Input
                            type="number"
                            name="zip"
                            onChange={event =>
                              this.setState({
                                profile: {
                                  ...this.state.profile,
                                  zip: event.target.value
                                }
                              })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label> Interests</Label>
                      <Input
                        type="text"
                        name="activities"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              interest: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Disease</Label>
                      <Input
                        type="text"
                        name="disability"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              disability: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Password</Label>
                      <Input
                        type="password"
                        name="password"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              password: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Upload Profile Picture</Label>
                      <Input
                        type="file"
                        name="pic"
                        onChange={event =>
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              picture: event.target.value
                            }
                          })
                        }
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> About</Label>
                      <Input
                        type="textarea"
                        name="description"
                        onChange={event =>
                          this.setState({
                            group: {
                              ...this.state.group,
                              description: event.target.value
                            }
                          })
                        }
                      />
                    </FormGroup>
                    <Button color="primary" round block>
                      {" "}
                      Submit
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EditProfile;
