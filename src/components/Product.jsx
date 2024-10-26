import ButtonAdd from './ButtonAdd'

const formatNumber = (number) => number.toString().padEnd(3, '0').replace(/\B(?=(\d{2})+(?!\d))/g, ',')

export default function Product ({ id, image, name, category, price, addToCart, updateProductCart, isInCart }) {
  return (
    <article className={`product ${isInCart ? 'selected' : ''}`}>
        <div className="banner">
            <img src={image} alt={image} />
        </div>
        <ButtonAdd
        selected={isInCart}
        addToCart={addToCart}
        updateProductCart={updateProductCart}
        name={name}
        price={price}
        id={id}/>
        <div className="product-datails">
            <small className="product-category">{category}</small>
            <strong className="product-name">{name}</strong>
            <strong className="product-price">
              ${formatNumber(price)}
              </strong>
        </div>
    </article>
  )
}
