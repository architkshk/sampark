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
                <CardHeader
                  className="text-center"
                  style={{fontSize:"30px", color:"#2F4E6F"}}>{this.state.data.name}</CardHeader>
                <CardBody className="p-4">
                  <h4 style={{ color:"#006699"}}> Age Group</h4>
                  <div>{this.state.data.age.greater} - {this.state.data.age.lesser} years</div>
                  <hr/>
                  <h4 style={{ color:"#006699"}}>  Address</h4>
                  <div>{this.state.data.address}</div>
                  <hr/>
                  <Row>
                    <Col>
                      <h4 style={{ color:"#006699"}}>  City</h4>
                      <div>{this.state.data.city}</div>
                    </Col>
                    <Col>
                      <h4 style={{ color:"#006699"}}>  State</h4>
                      <div>{this.state.data.state}</div>
                    </Col>
                  </Row>
                  <hr/>
                  <h4 style={{ color:"#006699"}}>  Disease Type</h4>
                  <div>{this.state.data.diseases}</div>
                  <hr/>
                  <h4 style={{ color:"#006699"}}>   Group time</h4>
                  <div>{this.state.data.time.start} - {this.state.data.time.end}</div>
                  <hr/>
                  <h4 style={{ color:"#006699"}}>  Description</h4>
                  <div>{this.state.data.description}</div>
                  <hr/>
                </CardBody>
                <CardFooter>
                  {this.props.groups.myGroups.filter(g=>g._id==this.state.data._id).length>0 ? <Button block color="danger" round onClick={async ()=>{await axios.get(`http://localhost:5000/group/leave/${this.state.data._id}`, {headers: {Authorization: this.props.users.token } } ); this.props.myGroups(this.props.users.token)}}>
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