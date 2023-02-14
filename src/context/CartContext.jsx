import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addCart = (newProduct) => {
        const idx = cartList.findIndex(product => product.id === newProduct.id)

        if (idx !== -1) {
            cartList[idx].cant = cartList[idx].cant + newProduct.cant
            setCartList([...cartList])

        } else {
            setCartList([...cartList, newProduct])
        }

    }

    const cantTotal = () => cartList.reduce((count, objProduct) => count += objProduct.cant, 0)
    const priceTotal = () => cartList.reduce((count, objProduct) => count += (objProduct.cant * objProduct.price), 0)
    const deleteItem = id => setCartList(cartList.filter(product => product.id !== id))
    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            emptyCart,
            cantTotal,
            priceTotal,
            deleteItem
        }}>
            { children }
        </CartContext.Provider>
    )
}
