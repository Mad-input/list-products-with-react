import { useEffect, useMemo, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { PiTree } from 'react-icons/pi'

const calculateTotal = (products) => {
  return products.reduce((total, product) => {
    return total + (product.price * product.count)
  }, 0)
}
const calculateTotalCount = (products) => {
  return products.reduce((total, product) => {
    return total + product.count
  }, 0)
}

export default function Cart ({ products, dropProductCart }) {
  const [total, setTotal] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const totalMemo = useMemo(() => calculateTotal(products), [products])
  const totalCountMemo = useMemo(() => calculateTotalCount(products), [products])

  useEffect(() => {
    setTotal(totalMemo)
    setTotalCount(totalCountMemo)
  }, [totalMemo, totalCountMemo])

  return (<aside className="cart">
    <h1 className="cartTitle">Your Cart ({totalCount})</h1>
    {
        !products || products.length < 1
          ? <div className="empty">
                <img src="/images/illustration-empty-cart.svg" alt="empty" />
                <p className='message-empty'>Your added items will appear here</p>
          </div>
          : <>
        <div className="content-cart">
            {
                products.map((product, i) => (
                    <div className="product-cart" key={i}>
                        <div className="product-details-cart">
                            <h3 className="prodcut-cart-title">{product.name}</h3>
                            <div className="count-total">
                                <span className="count">{product.count}x</span>
                                <span className="product-cart-price">@ ${product.price}</span>
                                <span className="product-cart-total">${product.price * product.count}</span>
                            </div>
                        </div>
                        <button className="btn-delete-cart" onClick={() => dropProductCart(product.id)}><IoIosCloseCircleOutline /></button>
                    </div>
                ))
            }
        </div>
        <div className="check">
            <small>Order Total</small>
            <strong className="total">${total}</strong>
        </div>
        <p className='tag'><PiTree /> This is a <span>carbon-neutral</span> delivery</p>
        <button className='btn-confirm-order'>Confirm Order</button>
    </>
    }
</aside>
  )
}
