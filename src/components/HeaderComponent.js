import React from 'react';
import { Button, Collapse, Jumbotron, Nav, NavbarBrand, Navbar, NavbarToggler, NavItem,
Modal, ModalHeader, ModalBody } from 'reactstrap';

function Header() {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>A Healthier Lifestyle</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}