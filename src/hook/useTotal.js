export const calculateTotal = (products) => {
  return products.reduce((total, product) => {
    return total + (product.price * product.count)
  }, 0)
}
export const calculateTotalCount = (products) => {
  return products.reduce((total, product) => {
    return total + product.count
  }, 0)
}
