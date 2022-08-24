import React, { useState, createContext, useContext } from "react";

const CartContext = createContext()

export default function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}