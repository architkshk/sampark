import React, { Component} from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import {connect} from "react-redux";
import  {Link} from "react-router-dom";
import {allGroup, myGroups, recommendGroups} from "../actions/groupActions";
import axios from "axios";

const notificationList = [
  {
    text: "1st notification"
  },
  {
    text: "2nd notification"
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
      recommendedGroups: null    // using fetchGroup from groupActions.js file logic commented
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
  componentDidMount() {
    this.props.allGroup()
    this.props.myGroups(this.props.users.token)
    this.props.recommendGroups(this.props.users.token)
  }

  render() {
/*
    {console.log(this.props.groups.allGroup)}
*/
    return (
      <div
        className="animated fadeIn "
        style={{ marginLeft: "15%", marginRight: "15%", marginTop: "2%" }}
      >
        <h1 className="font-weight-bold mb-4">Hello {this.props.users.user.name}!!</h1>
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
                <Input type="select" name="age">
                  <option>---</option>
                  <option>50-60</option>
                  <option>61-70</option>
                  <option>70-above</option>
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
        <h2 className="font-weight-bold my-4"> All Groups</h2>

        <Row>
          {console.log(this.props.groups.allGroup)}
          {this.props.groups.allGroup && this.props.groups.allGroup.map(group => {
            return (
              <Col lg="4" md="6" sm="12">
                <Card
                  outline
                  className="groupsCard"
                  style={{ padding: "2px", marginBottom: "30px" }}
                >
                  <Link to= {`/group/${group._id}`}>
                    <CardBody
                      className="font-weight-bolder text-center text-dark "
                      style={{
                        fontSize: "20px",
                        fontFamily: "Times New Roman"
                      }}
                    >
                      <div style={{fontSize:"25px"}}>{group.name}</div>
                      {/*
                      <div>{group.time.lesser} - {this.time.greater}</div>
*/}
                      <div style={{fontSize:"20px"}}>{group.city}</div>
                    </CardBody>
                  </Link>
                  <CardFooter>{this.props.groups.myGroups.filter(g=>g._id==group._id).length>0 ? <Button block color="danger" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/leave/${group._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Leave Group
                  </Button>: <Button block color="success" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/join/${group._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Join Group
                  </Button>}

                  </CardFooter>
                </Card>
              </Col>
            );
          })}
        </Row>
        <h2 className="font-weight-bold my-4"> Recommended Groups</h2>

        <Row>
          {console.log(this.props.groups.recommendedGroups)}
          {this.props.groups.recommendedGroups && this.props.groups.recommendedGroups.map(group => {
            return (
              <Col lg="4" md="6" sm="12">
                <Card
                  outline
                  className="groupsCard"
                  style={{ padding: "2px", marginBottom: "30px" }}
                >
                  <Link to= {`/group/${group._id}`}>
                    <CardBody
                      className="font-weight-bolder text-center text-dark "
                      style={{
                        fontSize: "20px",
                        fontFamily: "Times New Roman"
                      }}
                    >
                      <div style={{fontSize:"25px"}}>{group.name}</div>
                      {/*
                      <div>{group.time.lesser} - {this.time.greater}</div>
*/}
                      <div style={{fontSize:"20px"}}>{group.city}</div>
                    </CardBody>
                  </Link>
                  <CardFooter>{this.props.groups.myGroups.filter(g=>g._id==group._id).length>0 ? <Button block color="danger" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/leave/${group._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Leave Group
                  </Button>: <Button block color="success" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/join/${group._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Join Group
                  </Button>}

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
  return p;
};

export default connect(
  mapStateToProps,
  {allGroup, myGroups, recommendGroups}
)(Dashboard);
