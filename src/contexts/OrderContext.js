import React, { createContext, useContext } from 'react'

const OrderContext = createContext()


export default function OrderContextProvider({ children }) {
    const [orders, setOrders] = React.useState([])
    return (
        <OrderContext.Provider value={{ orders, setOrders }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(OrderContext)
}