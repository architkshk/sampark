import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Row,
  Col, CardFooter,
} from 'reactstrap';

import CardHeader from "reactstrap/es/CardHeader";
import {connect} from "react-redux";
import  {Link} from "react-router-dom";
import {myGroups} from "../actions/groupActions";
import axios from "axios";

const recommendedGroups=[
  {
    name:"group1",
    time:"5:50pm",
    location:"delhi"
  },
  {
    name:"group2",
    time:"5:50pm",
    location:"delhi"
  },
  {
    name:"group3",
    time:"5:50pm",
    location:"delhi"
  },
  {
    name:"group4",
    time:"5:50pm",
    location:"delhi"
  },
  {
    name:"group5",
    time:"5:50pm",
    location:"delhi"
  },
];


class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      groups:recommendedGroups,

    };
  };
  componentDidMount() {
    this.props.myGroups(this.props.users.token)
  }

  render(){
    return (
      <div className="animated fadeIn " style={{marginLeft:"12%", marginRight:"12%",marginTop:"20px"}}>
        <Card style={{padding:"2px", marginBottom:"10px"}}>
          <CardHeader className=" text-black-50 font-weight-bolder" style={{fontSize:"25px"}}>
            Intro
            <Link to="editProfile">
            <Button color="primary" style={{float:"right"}} round> Edit Profile</Button>
            </Link>
          </CardHeader>
          <CardBody className="text-center">
            <CardImg
              style={{height:"200px" ,width:"200px", borderRadius:"100%"}}
              src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"/>
            <br/>
            <div style={{fontSize:"30px"}}>{this.props.users.user.name}</div>
            <div style={{fontSize:"20px"}}>{this.props.users.user.age}</div>
            <div style={{fontSize:"20px"}}>{this.props.users.user.email}</div>

            <hr/>
            <div>lives in {this.props.users.user.city}</div>
            <div>Interested in {this.props.users.user.interests}</div>
          </CardBody>
        </Card>
        <Card  style={{padding:"2px", marginBottom:"10px"}}>
          <CardHeader className=" text-black-50 font-weight-bolder" style={{fontSize:"25px"}}>
            My Groups
            <Link to="/newGroup">
            <Button  color="primary" style={{float:"right"}} round> Create Group</Button>
            </Link>
          </CardHeader>
          <CardBody>
            <Row>
              {console.log(this.props.groups.myGroups)}
              {this.props.groups.myGroups && this.props.groups.myGroups.map(group => {
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
          </CardBody>
           {/* <Row>
              {this.state.groups.map(group=> {
                return(
                  <Col lg="4" md="6" sm="12">
                    <Card outline color="success" className="groupsCard" style={{padding:"2px", marginBottom:"30px"}}>
                      <Link to="./groups"> <CardBody
                        className="font-weight-bolder text-center text-dark "
                        style={{fontSize:"20px", fontFamily:"Times New Roman"}}
                      >
                        <div>
                          {group.name}
                        </div>
                        <div>
                          {group.time}
                        </div>
                        <div>
                          {group.location}
                        </div>
                      </CardBody></Link>
                      <CardFooter>
                        <Button block color="success" round>Leave Group</Button>
                      </CardFooter>
                    </Card>
                  </Col>
                )})}
            </Row>*/}
        </Card>
        <Card  style={{padding:"2px", marginBottom:"10px"}}>
          <CardHeader style={{fontSize:"20px"}}> Activity Logs</CardHeader>
          <CardBody>
            Person Activity
          </CardBody>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = (p) => {
  return p;
};

export default connect(
  mapStateToProps,
  {myGroups}
)(Profile);
