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
  DropdownToggle,
} from "reactstrap";

import {
  AppHeaderDropdown,
} from "@coreui/react";

import {logOut} from "../actions/userActions";

import { connect } from "react-redux";
import {myGroups} from "../actions/groupActions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      left: false
    };
  }

  toggle(e) {
    this.setState(prevState => ({
      [e]: !prevState[e]
    }));
  }

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
                  className="ml-auto text-black-50 font-weight-bold"
                  navbar
                  style={{ fontSize: "25px" }}
                >
                  <NavLink><Link to="/login">Login</Link></NavLink>
                </NavItem>
                {"  "}
                <NavItem
                  className="ml-auto text-black-50 font-weight-bold"
                  navbar
                  style={{ fontSize: "25px" }}
                >
                  <NavLink><Link to="/signup">SignUp</Link></NavLink>
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
            <NavbarBrand href="/" style={{ fontSize: "30px" }}>
              Sampark
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggle("isOpen")} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto text-black-50 font-weight-bold"
                navbar
                style={{ fontSize: "25px" }}
              >
                <NavItem className="d-md-down-none">

                    <NavLink href="/"
                    >Home

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
                      <a href="/login"> Logout</a>
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
