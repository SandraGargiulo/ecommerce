import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CardWidget } from "../CardWidget/CardWidget"
import './NavBar.css'

const NavBar = () => {
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <NavLink to="/">React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/type/motor">motor</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success' : 'btn btn-dark'} to="/type/grupo">Gorras</NavLink>
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
/*


        <nav>
            <ul>
                <li><a className="active" href="#home">Inicio</a></li>
                <li><a href="../About/About.js">Sobre nosotros</a></li>
                <li><a href="../About/Commerce.js">Tienda</a></li>
                <li><a href="../About/Contact.js">Contacto</a></li>
                <li><a className="widget" href="#home" ><CardWidget/></a></li>
            </ul> 
        </nav>
    )
}

export default NavBar*/