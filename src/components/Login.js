import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      contactNumber:"",
      password:"",
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
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
                        required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="number"
                        placeholder="Contact Number"
                        onChange={event=>
                          this.setState({
                            contactNumber:event.target.value
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
      </div>
    );
  }
}

export default Login;
