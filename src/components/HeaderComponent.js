import React, { Component } from 'react';
import { Button, Collapse, Jumbotron, Nav, Navbar, NavbarToggler,
Modal, ModalHeader, ModalBody, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

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
                                    <Link to="/">
                                        <NavLink className="nav-link" to="/home">Home</NavLink>
                                    </Link>
                                    <Link to="ourmenu">
                                        <NavLink className="nav-link" to="/ourmenu">Our Menu</NavLink>
                                    </Link>
                                    <Link to="/location">
                                        <NavLink className="nav-link" to="/location">Location</NavLink>
                                    </Link>
                                    <Link to="/aboutus">
                                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                                    </Link>

                                    <div>
                                         #Social <a href="https://twitter.com/b_activeenergy">
                                             <i className="fa fa-twitter"></i></a>

                                            <a href="https://b-m.facebook.com/Active-Energy-181432185206076/">
                                            <i className="fa fa-facebook"></i></a> 
                                    </div>

                                    <span className="navbar-text ml-auto">
                                        <Button outline onClick={this.toggleModal}>Hours</Button>
                                    </span>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Hours</ModalHeader>
                        <ModalBody>
                            <ListGroup variant="flush">
                                <ListGroupItem>Sunday 11 A.M. - 2 P.M.</ListGroupItem>
                                <ListGroupItem>Monday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem>Tuesday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem>Wednesday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem>Thursday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem>Friday 7 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem>Saturday 8 A.M. - 2 P.M.</ListGroupItem>
                            </ListGroup>
                        </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;