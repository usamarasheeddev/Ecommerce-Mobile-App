import React, { useState, createContext, useContext } from "react";

const CartContext = createContext()

let isEmpty = true
export default function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([])


    const addToCart = (item) => {

        const exist = cartItems.find((elem) => elem.id === item.id)

        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === item.id ? { ...exist, qnt: exist.qnt + 1 } : x)
            )

        }

        else {
            let product = { ...item, qnt: 1 }
            setCartItems(s => ([...s, product]))

        }


    }

    //REMOVE ITEM FORM CART
    const removeItem = (item) => {
        setCartItems(
            cartItems.filter((x) => x.id !== item.id)
        )

    }
    //INCRIMENT AND DECRIMENT QUNTITY
    const incrimentQnt = (item) => {
        setCartItems(

            cartItems.map((x) => x.id === item.id ? { ...item, qnt: item.qnt + 1 } : x)
        )
    }
    //DECRIMENT AND DECRIMENT QUNTITY

    const decrimentQnt = (item) => {
        if (item.qnt > 1)
            setCartItems(

                cartItems.map((x) => x.id === item.id ? { ...item, qnt: item.qnt - 1 } : x)
            )
    }



    return (
        <CartContext.Provider value={{
            cartItems, setCartItems, addToCart,
            removeItem, incrimentQnt, decrimentQnt
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}