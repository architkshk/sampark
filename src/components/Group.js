import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row
} from "reactstrap";
import CardHeader from "reactstrap/es/CardHeader";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        groupName: "",
        ageFrom: "",
        ageTo: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        activity: "",
        disability: "",
        description: ""
      }
    };
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center font-weight-bold">
            <Col md="9" lg="7" xl="6" style={{ marginTop: "5%" }}>
              <Card className="mx-8">
                <CardHeader className="text-center">Group Name</CardHeader>
                <CardBody className="p-4">
                  <h3> Age Group</h3>
                  <p>65 - 80 years</p>
                  <h3> Address</h3>
                  <p>65 - 80 years</p>
                  <Row>
                    <Col>
                      <h3> City</h3>
                      <p>65 - 80 years</p>
                    </Col>
                    <Col>
                      <h3> State</h3>
                      <p>65 - 80 years</p>
                    </Col>
                    <Col>
                      <h3>Pin Code</h3>
                      <p>65 - 80 years</p>
                    </Col>
                  </Row>
                  <h3> Group Activities</h3>
                  <p>65 - 80 years</p>
                  <h3> Disease Type</h3>
                  <p>65 - 80 years</p>

                  <h3> Description</h3>
                  <p>65 - 80 years</p>
                </CardBody>
                <CardFooter>
                  <Button block color="success" round>
                    Join Group
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Group;
