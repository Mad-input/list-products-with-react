import { useState } from 'react'
import './App.css'
// Supports weights 300-700
import '@fontsource-variable/red-hat-text'
import data from './data.json'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'

function App () {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(data)
  const [productCart, setProdutsCart] = useState(
    JSON.parse(localStorage.getItem('productsCart')) ||
    []
  )

  const addToCart = (product) => {
    const newProductsCart = [...productCart, product]
    localStorage.setItem('productsCart', JSON.stringify(newProductsCart))
    setProdutsCart(newProductsCart)
  }
  const updateProductCart = (id, count) => {
    const newProductsCart = productCart.map(product => {
      if (product.id === id) {
        product.count = count
      }
      return product
    })
    localStorage.setItem('productsCart', JSON.stringify(newProductsCart))
    setProdutsCart(newProductsCart)
  }
  const dropProductCart = (id) => {
    const newProductCart = productCart.filter((product) => product.id !== id)
    localStorage.setItem('productsCart', JSON.stringify(newProductCart))
    setProdutsCart(newProductCart)
  }
  return (
    <>
      <main>
        <h1 className='main-title'>Desserts</h1>
        <section className='products'>
          {
            products.map((product, i) => (
              <Product
              id={i}
              key={product.name}
              image={product.image.desktop}
              name={product.name}
              category={product.category}
              price={product.price}
              addToCart={addToCart}
              updateProductCart={updateProductCart}
              isInCart={productCart.some(item => item.id === i)}
              />
            ))
          }
        </section>
      </main>
        <Cart products={productCart} dropProductCart={dropProductCart}/>
    </>
  )
}

export default App
