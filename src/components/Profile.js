import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  CardLink,
  CardDeck, CardFooter,
} from 'reactstrap';

import CardHeader from "reactstrap/es/CardHeader";
import {connect} from "react-redux";
import  {Link} from "react-router-dom";

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
  render(){
    return (
      <div className="animated fadeIn " style={{marginLeft:"12%", marginRight:"12%",marginTop:"20px"}}>
        <Card style={{padding:"2px", marginBottom:"10px"}}>
          <CardHeader className=" text-black-50 font-weight-bolder" style={{fontSize:"25px"}}>
            Intro
            <Button href="editProfile" color="primary" style={{float:"right"}} round> Edit Profile</Button>
          </CardHeader>
          <CardBody className="text-center">
            <CardImg
              style={{height:"200px" ,width:"200px", borderRadius:"100%"}}
              src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"/>
            <br/>
            <div style={{fontSize:"30px"}}>{this.props.user.name}</div>
            <div style={{fontSize:"20px"}}>{this.props.user.age}</div>
            <div style={{fontSize:"20px"}}>{this.props.user.email}</div>

            <hr/>
            <div>lives in {this.props.user.city}</div>
            <div>Interested in {this.props.user.interests}</div>
          </CardBody>
        </Card>
        <Card  style={{padding:"2px", marginBottom:"10px"}}>
          <CardHeader className=" text-black-50 font-weight-bolder" style={{fontSize:"25px"}}>
            My Groups
            <Button href ="/editProfile" color="primary" style={{float:"right"}} round> Create Group</Button>
          </CardHeader>
          <CardBody>
            <Row>
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
            </Row>
          </CardBody>
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
  return p.users;
};

export default connect(
  mapStateToProps,
  null
)(Profile);
