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
import axios from "axios";
import {connect} from "react-redux";
import {myGroups} from "../actions/groupActions";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
    };
  }

  async componentDidMount() {
    let data=await axios.get(`http://localhost:5000/group/${this.props.match.params.groupId}`);
    data=data.data.group;
    this.setState(
      {
        data
      }
    );
    this.props.myGroups(this.props.users.token)
  };

  render() {
    if(this.state.data){
      console.log(this.props);
    return (
      <div className="app flex-row align-items-center">
        {console.log(this.state.data)}
        <Container>
          <Row className="justify-content-center font-weight-bold">
            <Col md="9" lg="7" xl="6" style={{ marginTop: "5%" }}>
              <Card className="mx-8">
                <CardHeader className="text-center">{this.state.data.name}</CardHeader>
                <CardBody className="p-4">
                  <h3> Age Group</h3>
                  <p>{this.state.data.age.greater}-{this.state.data.age.lesser}years</p>
                  <h3> Address</h3>
                  <p>{this.state.data.address}</p>
                  <Row>
                    <Col>
                      <h3> City</h3>
                      <p>{this.state.data.city}</p>
                    </Col>
                    <Col>
                      <h3> State</h3>
                      <p>{this.state.data.state}</p>
                    </Col>
                  </Row>
                  <h3> Disease Type</h3>
                  <p>{this.state.data.diseases}</p>
                  <h3> Group time</h3>
                  <p>{this.state.data.time.start}- {this.state.data.time.end}</p>
                  <h3> Description</h3>
                  <p>{this.state.data.description}</p>
                </CardBody>
                <CardFooter>
                  {this.props.groups.myGroups.filter(g=>g._id==this.state.data._id).length>0 ? <Button block color="disabled" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/leave/${this.state.data._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Leave Group
                  </Button>: <Button block color="success" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/join/${this.state.data._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
                    Join Group
                  </Button>}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );}
    return <div></div>
  }
}

const mapStateToProps = (p) => {
  return p;
};

export default connect(
  mapStateToProps,
  {myGroups }
)(Group);