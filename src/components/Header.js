import React from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  FormGroup,
  Input,
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  CardImg
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      left: false,
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
                style={{ fontSize: "25px" }}>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              {"  "}
              <NavItem
                className="ml-auto text-black-50 font-weight-bold"
                navbar
                style={{ fontSize: "25px" }}
              >
                <NavLink href="/signUp">SignUp</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;