import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col offset-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/ourmenu'>Our Menu</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Contact Information</h5>
                        <ul className="list-unstyled">
                            <li>
                                <h6>Address</h6>
                                <address>
                                    1573 154th Ave NW
                                    Suite #103
                                    Andover, MN 55304
                                    U.S.A.
                                </address><hr></hr>
                            </li>
                            <li><a href="tel:6514917615"><i className="fa fa-lg fa-phone"></i> (651)491-7615</a></li>
                            <li><a href="email:info@activeenergy.com"><i className="fa fa-lg fa-envelope"></i> info@activeenergy.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;