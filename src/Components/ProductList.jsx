import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'



const ProductList = () => {
  const {products} = useContext(ShopContext)

  return (
    <div>
      <h2>Our Awesome Foods</h2>

      <div>
        {products.map((product) =>{
          const {id, image, name, price} = product
          return (
            <div key={id}>
                <img src={image} alt="" />
                <div>
                  <h4>{name}</h4>
                  <p>{price}</p>
                </div>
                <button>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
