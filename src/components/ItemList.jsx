import React from 'react'
import storeItems from "../data/products.json"

const ItemList = () => {
  return (
    <div className='items-list'>
        {
            storeItems.map((product, idx) => {
                return <item key={product.id} {...product} />
            })
        }
    </div>
  )
}

export default ItemList
