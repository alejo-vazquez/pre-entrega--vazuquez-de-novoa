import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartWidget from "./cartwidget";


const NavbarExample = () => {    
    return (        
    <>
        <Navbar className="navBg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/personaje/:id">Personaje</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>           
                <Nav.Link as={Link} to="/cartwidget"><CartWidget /></Nav.Link>     
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
    </>
);
}
export default NavbarExample
