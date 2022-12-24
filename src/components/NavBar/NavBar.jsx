import { CardWidget } from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return(
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

export default NavBar