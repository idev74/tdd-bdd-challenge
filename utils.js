// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  if (w < 0 || h < 0)
    return null
  else
    return w * h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return 2 * (w + h)
}

const circleArea = r => {
  // should return the area of the circle
  return Math.PI * r ** 2
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
