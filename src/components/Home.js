import React, { Component} from "react";
import { Link} from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="animated fadeIn text-center"
        style={{ marginTop: "15%", fontWeight: "bold", fontSize: "50px" }}
      >
        <h1 className="font-weight-bold mb-4"  style={{  fontSize: "70px" }}
        >Welcome to Sampark</h1>
          <h3 style={{maxWidth: "1000px", margin:" auto"}}>Sampark is a platform aimed at helping the aged people to find the right company which resonates with their lifestyle through interest groups.</h3>
        <Link to="/login"><button className="btn btn-primary p-3">Login to continue</button></Link>
      </div>
    );
  }
}

export default Home;
