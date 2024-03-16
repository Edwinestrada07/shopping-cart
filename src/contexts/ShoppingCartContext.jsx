import React, { createContext, useState } from 'react'

const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, ShoppingCartProvider }




