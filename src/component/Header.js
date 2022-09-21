import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <Navbar.Brand href="/Home">E Garments Project</Navbar.Brand>
                    <Nav className="me-auto ">
                        <Nav.Link  href="/Home" className='nav-link active px-3'>Home</Nav.Link>
                        <Nav.Link href="/About" className='px-3'>About Us</Nav.Link>
                        <NavDropdown title="Product" id="navbarScrollingDropdown" className='px-3'>
                            <NavDropdown.Item href="/Products"> Our Products</NavDropdown.Item>
                            <NavDropdown.Item href="/ProductsCategories">
                                Products Categories
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/FilterProduct">
                                FilterProduct
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/SortProduct">
                                Sort Product
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="User" id="navbarScrollingDropdown" className='px-3'>
                            <NavDropdown.Item href="/SignUp"> Sign Up </NavDropdown.Item>
                            <NavDropdown.Item href="/SignIn"> Sign In </NavDropdown.Item>
                            <NavDropdown.Item href="/ChangePassword"> ChangePassword </NavDropdown.Item>
                            <NavDropdown.Item href="/ForgotPassword"> ForgotPassword </NavDropdown.Item>
                            <NavDropdown.Item href="/LogOut"> Log Out </NavDropdown.Item>
                            <NavDropdown.Item href="/ViewCart"> View Cart</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;