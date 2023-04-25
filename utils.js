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

const createItem = (name, price, quantity) => {
  return { name, price, quantity }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  return shoppingCart.push(item)
}

const getNumItemsInCart = (item) => {
  let total = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].quantity
  }
  return total
}

const removeItemFromCart = (item) => {
  const i = shoppingCart.indexOf(item)
  if (i > -1) {
    return shoppingCart.splice(item, 1)
  }
}

const isEmpty = () => {
  return shoppingCart.length === 0 ? true : false
}

const totalCost = () => {
  let total = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity
  }
  return total
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, isEmpty, totalCost
}
