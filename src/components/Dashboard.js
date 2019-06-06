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
import {allGroup, myGroups, recommendGroups,filteredGroups} from "../actions/groupActions";
import {getNotification,addNotification} from "../actions/notificationActions";
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
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      age:"",
      state:"",
      city:"",
      states:[],
      cities:[],
      dropdownOpen: false,
      radioSelected: 2,
      notifications: notificationList,
      recommendedGroups: null    // using fetchGroup from groupActions.js file logic commented
    };
  }

  async componentDidMount() {
    //console.log("component mounted");
    let states = await axios.get("http://localhost:5000/data/states");
    states = states.data;
    //console.log(states);
    this.setState({ states:states });
    this.props.allGroup();
    this.props.myGroups(this.props.users.token);
    this.props.recommendGroups(this.props.users.token);
    axios.post("http://localhost:5000/notification/create", "entered in notification1 ")
    /* let notification=await axios.get("http://localhost:5000/auth/signin//notification/my")
     console.log(notification);*/
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

  handleSubmit=async e=>{
    e.preventDefault();
    await this.props.filteredGroups({
      age:this.state.age,
      state:this.state.state,
      city:this.state.city,
    });
    this.setState({
      age:"",
      state:"",
      city:"",
      cities:[],
    })
  };
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
                <div style={{ fontSize: "25px", color: "black" }}>
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
        <Card>
          <CardHeader>
            <Row>
              <Col>
                <Form inline onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Age Group</Label>
                    <Input
                      type="select"
                      name="age"
                      value={this.state.age}
                      onChange={event=>
                        this.setState({
                          age:event.target.value
                        })}
                    >
                      <option>select</option>
                      <option>0-10</option>
                      <option>11-20</option>
                      <option>21-30</option>
                      <option>31-40</option>
                      <option>41-50</option>
                      <option>51-60</option>
                      <option>61-70</option>
                      <option>70-above</option>
                    </Input>
                  </FormGroup>{"  "}
                  <FormGroup>
                    <Label>State</Label>
                    <Input
                      type="select"
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
                          cities:cities,
                          state:state,
                        });
                      }}
                    >
                      <option >
                        Select
                      </option>

                      {this.state.states.map(e => (
                        <option>{e.value}</option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      type="select"
                      name="city"
                      onChange={event=>{
                        this.setState({
                          city:event.target.value,
                        })
                      }}
                      value={this.state.city}
                    >
                      <option>
                        Select
                      </option>

                      {this.state.cities.map(e => (
                        <option>{e.value}</option>
                      ))}
                    </Input>
                  </FormGroup>
                  <Button color="primary" round>
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              {this.props.groups.filteredGroups.map(group => {
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
                          <div style={{fontSize:"25px", color:"#303030"}}>{group.name}</div>
                          <div style={{fontSize:"20px", color:"#303030"}}>{group.city}</div>
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
          </CardBody>
        </Card>

        <h2 className="font-weight-bold my-4"> All Groups</h2>

        <Row>
          {/*{console.log(this.props.groups.allGroup)}*/}
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
                      <div style={{fontSize:"25px", color:"#303030"}}>{group.name}</div>
                      {/*
                      <div>{group.time.lesser} - {this.time.greater}</div>
*/}
                      <div style={{fontSize:"20px", color:"#303030"}}>{group.city}</div>
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
                      <div style={{fontSize:"25px", color:"#303030"}}>{group.name}</div>
                      {/*
                      <div>{group.time.lesser} - {this.time.greater}</div>
*/}
                      <div style={{fontSize:"20px", color:"#303030"}}>{group.city}</div>
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
  {allGroup, myGroups, recommendGroups,filteredGroups}
)(Dashboard);
