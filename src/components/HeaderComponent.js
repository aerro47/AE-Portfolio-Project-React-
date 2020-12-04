import React, { Component } from 'react';
import { Button, Collapse, Jumbotron, Nav, Navbar, NavbarToggler, NavItem,
Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    };

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                    <img src="../images/Active Energy logo.png" className="img-fluid" alt="Logo for Active Energy" height="200" />
                                </div>
                                <h1>A Healthier Lifestyle</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar expand="sm" sticky="top">
                    <div className="container">
                        <div className="col-md-10">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isNavOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/ourmenu">Our Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/location">Location</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;