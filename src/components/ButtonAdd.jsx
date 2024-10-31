import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { FiMinusCircle } from 'react-icons/fi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useState } from 'react'

export default function ButtonAdd ({ selected, addToCart, updateProductCart, name, price, id, urlImage }) {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count >= 50) return
    setCount(count => count + 1)
  }
  const decrement = () => {
    if (count <= 1) return
    setCount(count => count - 1)
  }
  return (
    !selected
      ? <button className="btn-add-to-cart" onClick={() => {
        addToCart({ id, name, price, count, urlImage })
      } }>
        <span><MdOutlineAddShoppingCart /> Add to Cart</span>
      </button>
      : <div className="counter btn-add-to-cart">
          <button className='btn add' onClick={() => {
            increment()
            updateProductCart(id, count)
          }}><IoAddCircleOutline /></button>
          <span>{count}</span>
          <button className='btn add' onClick={() => {
            decrement()
            updateProductCart(id, count)
          }}><FiMinusCircle /></button>
      </div>
  )
}
