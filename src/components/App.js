import React from "react";
import Header from './Header';
import Container from "reactstrap/es/Container";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import signUp from "./Signup"
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <BrowserRouter>
          <Container fluid>
            <Route exact path="/signup" component={signUp} />
            <Route exact path="/login" component={Login} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
