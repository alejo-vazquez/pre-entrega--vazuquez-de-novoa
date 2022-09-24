import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './components/navbar';
import { Navbar, Nav, Container } from "react-bootstrap"

function App() {
  return (
<div>
<Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
</div>
  );
}

export default App;
