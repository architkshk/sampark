import React from "react";
import Header from "./Header";
import Container from "reactstrap/es/Container";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import signUp from "./Signup";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter> 
          <Header />
          <Container fluid>
            <Route exact path="/signup" component={signUp} />
            <Route exact path="/login" component={Login} />
            {this.props.loggedIn ? (
              <Route exact path="/" component={Dashboard} />
            ) : (
              <Route exact path="/" component={Home} />
            )}
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = p => {
  return p.users;
};

export default connect(
  mapStateToProps,
  null
)(App);
