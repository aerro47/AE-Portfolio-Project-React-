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
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar expand="md">
                    <div className="container">
                        <div className="col-md-10 mx-2">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isNavOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <Link to="/">
                                        <NavLink className="nav-link" to="/home">Home</NavLink>
                                    </Link>
                                    <Link to="ourmenu">
                                        <NavLink className="nav-link" to="/ourmenu">Our Menu</NavLink>
                                    </Link>
                                    <Link to="/aboutus">
                                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                                    </Link>

                                    <div className="ml-3">
                                         #Social <a href="https://twitter.com/b_activeenergy">
                                             <i className="fa fa-twitter"></i></a>
                                            {"\n"}
                                            <a href="https://b-m.facebook.com/Active-Energy-181432185206076/">
                                            <i className="fa fa-facebook"></i></a> 
                                    </div>

                                    <span className="navbar-text ml-3">
                                        <Button outline onClick={this.toggleModal} style={{background: 'black', color: '#10f009'}}>Hours</Button>
                                    </span>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className='hours-header' toggle={this.toggleModal}>Hours</ModalHeader>
                        <ModalBody className='hours-modal'>
                            <ListGroup variant="flush">
                                <ListGroupItem className='hours-list' >Sunday 11 A.M. - 2 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Monday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Tuesday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Wednesday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Thursday 6:30 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Friday 7 A.M. - 5 P.M.</ListGroupItem>
                                <ListGroupItem className='hours-list' >Saturday 8 A.M. - 2 P.M.</ListGroupItem>
                            </ListGroup>
                        </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;