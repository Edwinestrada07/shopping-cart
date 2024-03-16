import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/ShoppingCartContext'

const Navbar = () => {
    const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0)

    const navStyles = {
        color: "#fff",
        listStyle: "none",
        textDecoration: "none"
    }

    return (
        <nav>
            <Link to={"/"} style={navStyles}>
                <h2>Store</h2>
            </Link>
            
            <ul className="nav-list">
                <Link to={"/cart"} style={navStyles}>
                    <li>
                        Cart items: <span className="cart-count">{quantity}</span>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar; // Corrección: exporta Navbar como exportación por defecto
