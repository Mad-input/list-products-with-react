import { useEffect, useMemo, useState } from 'react'
import { calculateTotal } from '../hook/useTotal'
import storeModal from '../store/useStore.js'

export default function ModalConfirm ({ products, setProductsCart }) {
  const [total, setTotal] = useState(0)
  const { showModal, setShow } = storeModal()

  const totalMemo = useMemo(() => calculateTotal(products), [products])

  useEffect(() => {
    setTotal(totalMemo)
  }, [totalMemo])
  return (
    <div className={`modal-overlay ${showModal ? '' : 'close'}`}>
        <div className={'modal-confirm'}>
            <img src="/images/icon-order-confirmed.svg" alt="check-icon" />
            <h1>Order Confirmed</h1>
            <p className="confirm-decription">We hope you enjoy your food!</p>
            <div className="container-products">
                <ul className="products">
                    {
                    products.map((product, i) => (
                        <li className="product-cart" key={i}>
                            <img src={product.urlImage} alt="" width="60"/>
                            <div className="product-details-cart">
                                <h3 className="prodcut-cart-title">{product.name}</h3>
                                <div className="count-total">
                                    <span className="count">{product.count}x</span>
                                    <span className="product-cart-price">@ ${product.price}</span>
                                </div>
                            </div>
                            <span className="product-cart-total">${product.price * product.count}</span>
                        </li>
                    ))
                    }
                </ul>
                <p className="total-products">
                    <span>Order Total</span>
                    <span>{`$${total}`}</span>
                </p>
            </div>
            <button className='btn-confirm-order' onClick={() => {
              setProductsCart([])
              setShow()
            }}>Start New Order</button>
     </div>
    </div>
  )
}
