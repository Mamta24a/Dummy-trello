import React, { Component } from 'react';
import {
    NavDropdown,
    Nav,
    Navbar,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Navbar.Brand href="#">Trello</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/wodnd">Without Drag n drop</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/dnd">With Drag n drop</Link>
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#logout">Logout</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="/memes">Dank memes</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;