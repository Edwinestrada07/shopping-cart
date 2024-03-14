import React from "react"
import { Navbar } from "./components/Navbar"
import ItemList from "./components/ItemList"
import ShoppingCart from "./components/ShoppingCart"
import ShoppingCartProvider from "./contexts/ShoppingCartContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <ShoppingCartProvider>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemList />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
            </Router>
        </ShoppingCartProvider> 
    )
}

export default App