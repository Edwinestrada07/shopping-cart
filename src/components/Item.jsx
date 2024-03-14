import React, { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'

const Item = ({ name, price, id, imgUrl }) => {

    const [ cart, setCart ] = useContext(CartContext)

    const addToCart = () => {

        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id)

            if(isItemsFound) {

                return currItems.map((item) => {

                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}            
                    } else {
                        return item
                    }
                })
            } else {
                return [...currItems, { id, quantity: 1, price }]
            }
        })
    }

    const removeItem = (id) => {

        setCart((currItems) => {

            if(currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id)
            } else {

                return currItems.map((item) => {

                    if(item.id === id) {
                        return {...item,quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }


    return (
        <div className='item-box'>Item
            <div>{name}</div>
            <img src={imgUrl} width="80" height="55"/>
            <div className='item-price'>{price}</div>
            <button className='item-add-button' onClick={() => addToCart()}
                >+ Add to cart
            </button>
        </div>
    )
}

export default Item
