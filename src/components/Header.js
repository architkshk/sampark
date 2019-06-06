import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import { AppHeaderDropdown } from "@coreui/react";

import {logOut} from "../actions/userActions";

import { connect } from "react-redux";
import {myGroups} from "../actions/groupActions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      left: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggle(e) {
    this.setState(prevState => ({
      [e]: !prevState[e]
    }));
  }

  handleLogout=()=>{
    this.props.logOut();
  };

  render() {
    return (
      <div>
        {this.props.loggedIn === false && (
          <Navbar
            dark
            style={{ background: "#1c1c1c" }}
            expand="lg"
            className="ml-auto text-black-50 font-weight-bold"
          >
            <NavbarBrand href="/" style={{ fontSize: "30px" }}>
              Sampark
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggle("isOpen")} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem
                  navbar
                  style={{ fontSize: "25px" }}
                >
                  <NavLink>
                    <Link to="/login" className="ml-auto text-white-50 font-weight-bold">Login</Link>
                  </NavLink>
                </NavItem>
                {"  "}
                <NavItem
                  navbar
                  style={{ fontSize: "25px" }}
                >
                  <NavLink>
                    <Link to="/signup" className="ml-auto text-white-50 font-weight-bold">SignUp</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
        {this.props.loggedIn === true && (
          <Navbar
            dark
            style={{ background: "#1c1c1c" }}
            expand="lg"
            className="ml-auto text-black-50 font-weight-bold"
          >
            <Link to="/" className="text-white font-weight-bold">
            <NavbarBrand style={{ fontSize: "30px" }}>
              Sampark
            </NavbarBrand>
            </Link>
            <NavbarToggler onClick={() => this.toggle("isOpen")} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto text-black-50 font-weight-bold"
                navbar
                style={{ fontSize: "25px" }}
              >
                <NavItem >
                  <NavLink>
                    <Link to="/" className="ml-auto text-white-50 font-weight-bold">Home</Link>
                  </NavLink>
                </NavItem>
                <AppHeaderDropdown direction="down">
                  <DropdownToggle nav>Groups</DropdownToggle>
                  <DropdownMenu down style={{ down: "auto" }}>
                    <DropdownItem>
                      <Link to="/newGroup"> Create A group</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/profile">My Groups</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </AppHeaderDropdown>
                <AppHeaderDropdown direction="down">
                  <DropdownToggle nav>
                    Profile &nbsp;
                    <img
                      src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"
                      className="rounded-circle"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </DropdownToggle>
                  <DropdownMenu down style={{ down: "auto" }}>
                    <DropdownItem>
                      <Link to="/profile"> My Profile</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/editProfile"> Edit Profile</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="login" onClick={this.handleLogout}> Logout</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </AppHeaderDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}

const mapStateToProps = p => {
  return p.users;
};

export default connect(
  mapStateToProps,
  {logOut}
)(Header);
