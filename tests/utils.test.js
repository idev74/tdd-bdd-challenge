const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should return the area of a 5 by 7 rectangle", function() {
  const area = utils.area(5, 7)
  expect(area).to.be.a("number")
  expect(area).to.equal(35)
})

it("should return the perimeter of a 5 by 7 rectangle", function() {
  const perimeter = utils.perimeter(5, 7)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(24)
})

it("should return the area of a circle of radius 5", function() {
  const area = utils.circleArea(5)
  expect(area).to.be.a("number")
  expect(area).to.equal(78.53981633974483)
})

it("should return null if width, breadth, or radius is negative", function() {
  const area = utils.area(-5, 7)
  expect(area).to.be.a("null")
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99, 1)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("apple", 0.99, 1)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart[0]).to.have.property("name", "apple")
  expect(cart[0]).to.have.property("price", 0.99)
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("banana", 1.29, 1)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.have.property("length", 1)
  expect(cart[0]).to.have.property("name", "banana")
  expect(cart[0]).to.have.property("price", 1.29)
})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("apple", 0.99, 1)
  utils.addItemToCart(item)
  const cartLength = utils.getNumItemsInCart()
  expect(cartLength).to.be.a("number")
  expect(cartLength).to.equal(1)
})

it("Should remove items from cart", function() {
  const orange = utils.createItem("orange", 2.30, 1)
  const lemon = utils.createItem("lemon", 0.89, 1)
  utils.addItemToCart(orange)
  utils.addItemToCart(lemon)
  utils.removeItemFromCart(orange)
  const cart = utils.getShoppingCart()
  expect(cart[0]).to.have.property("name", "lemon")
  expect(cart[0]).to.have.property("price", 0.89)
  expect(cart[0]).to.have.property("quantity", 1)
})

it("Should update the count of items in the cart", function() {
  const apple = utils.createItem("apple", 0.99, 3)
  const banana = utils.createItem("banana", 1.29, 4)
  utils.addItemToCart(apple)
  utils.addItemToCart(banana)
  const cart = utils.getShoppingCart()
  expect(cart[0]).to.have.property("quantity", 3)
  expect(cart[1]).to.have.property("quantity", 4)
  const cartLength = utils.getNumItemsInCart()
  expect(cartLength).to.equal(7)
})

it("Should validate that an empty cart has 0 items", function() {
  const cart = utils.getShoppingCart()
  const isEmpty = utils.isEmpty(cart)
  expect(isEmpty).to.equal(true)
})


it("Should return the total cost of all items in the cart", function() {
  const bread = utils.createItem("bread", 2.99, 1)
  const milk = utils.createItem("milk", 3.99, 1)
  const eggs = utils.createItem("eggs", 4.99, 2)
  utils.addItemToCart(bread)
  utils.addItemToCart(milk)
  utils.addItemToCart(eggs)
  const total = utils.totalCost()
  expect(total).to.be.a("number")
  expect(total).to.equal(16.96)
})
