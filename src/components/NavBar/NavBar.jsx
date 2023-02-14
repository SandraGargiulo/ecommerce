import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CardWidget } from "../CardWidget/CardWidget"
import './NavBar.css'


const NavBar = () => {
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="../../img/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Electromecanica"
                        />
                    </Navbar.Brand>
                <NavLink to="/"></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/about">Sobre nosotros</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/category/motor">Motor</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/category/grupo">Grupos electrogenos</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/contacto">Contacto</NavLink>
                    </Nav>
                    <Nav>
                        <Link to='/cart'>🛒</Link>
                        <CardWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar
