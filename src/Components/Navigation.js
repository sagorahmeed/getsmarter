import React from "react";
import { Link } from "react-router-dom";
import "./components_styles.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <div className="main_menu_wrapper">
                <div className='menu_wrapper'>
                <Navbar collapseOnSelect expand="lg">
                        <Link to='/' className='logo'>ZEN</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ marginLeft: "auto" }}>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/service">
                                        Services
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/page">
                                        Pages
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/blog">
                                        blog
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item" to="/contact">
                                        contact
                                    </Link>
                                </li>
                                <li className="menu_list_item">
                                    <Link className="menu_item quote_button" to="/">
                                        get a quote
                                    </Link>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        </>
    );
};

export default Navigation;
