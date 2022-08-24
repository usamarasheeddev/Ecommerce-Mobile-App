import React, { useContext, useState, createContext } from 'react'
import shopProducts from '../Screens/data'

const ProductsContext = createContext()
export default function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState(shopProducts)
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}