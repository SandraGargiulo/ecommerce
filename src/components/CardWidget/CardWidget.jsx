import { CgShoppingCart } from "react-icons/cg"
import './CardWidget.css'
import { useCartContext } from '../../context/CartContext'

export const CardWidget =() => {
    const { cantTotal } = useCartContext()
    return(
        <div>
            { cantTotal() !== 0 && cantTotal() }
            { CgShoppingCart () }
        </div>
    )
}

