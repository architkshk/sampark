import React, { Component} from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Progress,
  Row,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import {connect} from "react-redux";

const notificationList = [
  {
    text: "1st notification"
  },
  {
    text: "2nd notification"
  }
];

const taskList = [
  {
    text: "task 1"
  },
  {
    text: "task 2"
  }
];

const recommendedGroups = [
  {
    name: "group1",
    time: "5:50pm",
    location: "delhi"
  },
  {
    name: "group2",
    time: "5:50pm",
    location: "delhi"
  },
  {
    name: "group3",
    time: "5:50pm",
    location: "delhi"
  },
  {
    name: "group4",
    time: "5:50pm",
    location: "delhi"
  },
  {
    name: "group5",
    time: "5:50pm",
    location: "delhi"
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      notifications: notificationList,
      pendingTask: taskList,
      groups: recommendedGroups    // using fetchGroup from groupActions.js file logic commented
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }
  render() {
    {console.log(this.props.user)}
    return (
      <div
        className="animated fadeIn "
        style={{ marginLeft: "15%", marginRight: "15%", marginTop: "2%" }}
      >
        <h1 className="font-weight-bold mb-4">Hello Mr. {this.props.user.name}!!</h1>
        <Row>
          <Col>
            <Card outline style={{ padding: "2px", marginBottom: "30px" }}>
              <CardHeader className="text-white" color="dark" style={{}}>
                <div style={{ fontSize: "20px", color: "black" }}>
                  Notifications
                  <Badge pill color="danger">
                    2
                  </Badge>
                </div>
              </CardHeader>
              <CardBody className="pb-0">
                <div
                  className=" text-black-50 mx-3"
                  style={{ backgroundColor: "white" }}
                >
                  <ul style={{ listStyleType: "none" }}>
                    {this.state.notifications.map(notification => {
                      return (
                        <li key="notification.id">
                          <span className="font-weight-bolder">
                            {notification.text}
                          </span>
                          <hr />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h2 className="font-weight-bold my-4">Find Groups</h2>
        <Row>
          <Col>
            <Form inline>
              <FormGroup>
                <Label>Age Group</Label>
                <Input type="select" name="Age">
                  <option>---</option>
                  <option>50-60years</option>
                  <option>60-70years</option>
                  <option>70 above</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Disease</Label>
                <Input type="select" name="disease">
                  <option>---</option>
                  <option>problem 1</option>
                  <option>problem 2</option>
                  <option>problem 3</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Activities</Label>
                <Input type="select" name="activity">
                  <option>---</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Location</Label>
                <Input type="select" name="location">
                  <option>---</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
              <Button color="primary" round>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <h2 className="font-weight-bold my-4"> Recommended Groups</h2>

        <Row>
          {this.state.groups.map(group => {
            return (
              <Col lg="4" md="6" sm="12">
                <Card
                  outline
                  className="groupsCard"
                  style={{ padding: "2px", marginBottom: "30px" }}
                >
                  <a href="./group">
                    <CardBody
                      className="font-weight-bolder text-center text-dark "
                      style={{
                        fontSize: "20px",
                        fontFamily: "Times New Roman"
                      }}
                    >
                      <div>{group.name}</div>
                      <div>{group.time}</div>
                      <div>{group.location}</div>
                    </CardBody>
                  </a>
                  <CardFooter>
                    <Button block color="success" round>
                      Join Group
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            );
          })}
        </Row>
        {/*<Card*/}
          {/*outline*/}
          {/*color="secondary"*/}
          {/*style={{ padding: "2px", marginBottom: "10px" }}*/}
        {/*>*/}
          {/*<CardHeader*/}
            {/*className="text-white bg-secondary"*/}
            {/*styl={{ fontSize: "20px" }}*/}
          {/*>*/}
            {/*Pending Tasks*/}
          {/*</CardHeader>*/}
          {/*<CardBody className="pb-0">*/}
            {/*<div className="text-wrap text-black-50 mx-3">*/}
              {/*<ul style={{ listStyleType: "none" }}>*/}
                {/*{this.state.pendingTask.map(task => {*/}
                  {/*return (*/}
                    {/*<li key="task.id">*/}
                      {/*<span className="font-weight-bolder">{task.text}</span>*/}
                      {/*<span>*/}
                        {/*<Progress color="info" value="25">*/}
                          {/*25%*/}
                        {/*</Progress>*/}
                      {/*</span>*/}
                      {/*<hr />*/}
                    {/*</li>*/}
                  {/*);*/}
                {/*})}*/}
              {/*</ul>*/}
            {/*</div>*/}
          {/*</CardBody>*/}
        {/*</Card>*/}
      </div>
    );
  }
}

const mapStateToProps = (p) => {
  return p.users;
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
