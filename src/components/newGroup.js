import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import CardHeader from "reactstrap/es/CardHeader";
import {connect} from "react-redux";
import {addGroup } from "../actions/groupActions";
import {Redirect} from "react-router-dom";

class newGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      nationality:"",
      age:{
        lesser:"",
        greater:"",
      },
      address:"",
      city:"",
      state:"",
      diseases:"",
      interests:"",
      description:"",
      time:{
        start:"",
        end:"",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.addGroup({
      name: this.state.name,
      nationality: this.state.nationality,
      age: this.state.age,
      city:this.state.city,
      state:this.state.state,
      diseases:this.state.diseases,
      interests:this.state.interests,
      address:this.state.address,
      description:this.state.description,
      time:this.state.time,
    },
      this.props.users.token
    );
    console.log(this.props.groups);
    this.setState({
      name:"",
      nationality:"",
      age:{
        lesser:"",
        greater:"",
      },
      address:"",
      city:"",
      state:"",
      diseases:"",
      interests:"",
      description:"",
      time:{
        start:"",
        end:"",
      }
    });
  };


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container >
          <Row className="justify-content-center font-weight-bold">
            <Col md="9" lg="7" xl="6" style={{marginTop:"5%"}}>
              <Card className="mx-8">
                <CardHeader className="text-center">
                  Create a New Group
                </CardHeader>
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label>Group Name</Label>
                      <Input
                        type="text"
                        name= "group name"
                        required
                        onChange={event=>
                          this.setState({
                            name:event.target.value
                          })}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label> Age Group</Label>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            From
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="number"
                          name="age"
                          onChange={event=>
                            this.setState({
                              age:{
                                ...this.state.age,
                                lesser:event.target.value
                              }                            })}
                        />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            To
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="number"
                          name="age"
                          onChange={event=>
                            this.setState({
                              age:{
                                ...this.state.age,
                                greater:event.target.value
                              }
                            })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label> Address</Label>
                      <Input
                        type="text"
                        name="address"
                        onChange={event=>
                          this.setState({
                            address:event.target.value
                          })}
                        required/>
                    </FormGroup>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label> Nationality</Label>
                          <Input
                            type="text"
                            name="nationality"
                            onChange={event=>
                              this.setState({
                                nationality:event.target.value
                              })}
                            required />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label> State</Label>
                          <Input
                            type="text"
                            name="state"
                            onChange={event=>
                              this.setState({
                                state:event.target.value
                              })}
                            required />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label> City</Label>
                          <Input
                            type="text"
                            name="city"
                            onChange={event=>
                              this.setState({
                                city:event.target.value
                              })}
                            required />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label> Disease Type</Label>
                      <Input
                        type="text"
                        name="diseases"
                        onChange={event=>
                          this.setState({
                            diseases:event.target.value
                          })}
                        required />
                    </FormGroup>
                    <FormGroup>
                      <Label> Interests </Label>
                      <Input
                        type="text"
                        name="disability"
                        onChange={event=>
                          this.setState({
                            interests:event.target.value
                          })}
                        required />
                    </FormGroup>
                    <FormGroup>
                      <Label> Group Time</Label>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            From
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="number"
                          name="age"
                          onChange={event=>
                            this.setState({
                              time:{
                                ...this.state.time,
                                start:event.target.value
                              }
                            })}
                        />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            To
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="number"
                          name="age"
                          onChange={event=>
                            this.setState({
                              time:{
                                ...this.state.time,
                                end:event.target.value
                              }
                            })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label> Description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        onChange={event=>
                          this.setState({
                            description:event.target.value
                          })}
                      />
                    </FormGroup>
                    <Button color="primary" round block > Submit</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {console.log(this.props.groups.groups)}
        {this.renderRedirect()}
      </div>
    );
  }
}

const mapStateToProps = (p) => {
  return p;
};

export default connect(
  mapStateToProps,
  {addGroup }
)(newGroup);