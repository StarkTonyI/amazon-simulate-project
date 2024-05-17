import { getProduct } from '../data/products.js';
import { cart } from '../data/cart.js'
import { saveToStorage } from '../data/cart.js';
import { MakeTrackingFalse } from '../data/cart.js';
let PurchasedCards = cart.filter((i)=>i.Purchased === true)
let InputSearch = document.querySelector('.search-bar');

InputSearch.addEventListener('input',(event)=>{
  console.log(PurchasedCards.filter((i)=>i.name.includes(event.target.value)))
  FilterForSearch(PurchasedCards.filter((i)=>i.name.includes(event.target.value)))
})

console.log(PurchasedCards)
const FilterForSearch = (searchValue) => {
  let orderHTML = '';
  searchValue.forEach((cartItem) => {
  const productId = cartItem
  const matchingProduct = getProduct(productId).orderSheet
  console.log(matchingProduct)
const mathingProduct = getProduct(cartItem).orderSheet;

   orderHTML += `
    <div class="order-header">
    <div class="order-header-left-section">
      <div class="order-date">
        <div class="order-header-label">Order Placed:</div>
        <div>${cartItem.day}</div>
      </div>
      <div class="order-total">
        <div class="order-header-label">Total:</div>
        <div>$${cartItem.price}</div>
      </div>
    </div>
    
    <div class="order-header-right-section">
      <div class="order-header-label">Order ID:</div>
      <div>${mathingProduct.id}</div>
    </div>
    </div>
    
    <div class="order-details-grid">
    <div class="product-image-container">
      <img src=${mathingProduct.image}>
    </div>
    
    <div class="product-details">
      <div class="product-name">
        ${mathingProduct.name}
      </div>
      <div class="product-delivery-date">
        Arriving on: ${cartItem.dateString}
      </div>
      <div class="product-quantity">
        Quantity: ${cartItem.quantity}
      </div>
      <button class="buy-again-button button-primary">
        <img class="buy-again-icon" src="images/icons/buy-again.png">
        <span class="buy-again-message">Buy it again</span>
      </button>
    </div>
    
    <div class="product-actions">
      <a href="/amazon-simulate-project/tracking.html">
        <button class="track-package-button button-secondary"
        data-tracking-id="${matchingProduct.id}"
        >
          Track package
        </button>
      </a>
    </div>
    </div>`
})

document.querySelector('.Order-Cart').innerHTML = orderHTML
  document.querySelectorAll('.track-package-button').forEach((button)=>{
    button.addEventListener('click', () => {
      cart.forEach((item)=>{
        if(item.productId === button.dataset.trackingId){
          item.tracking = true;
        }
      })
    saveToStorage()
  })
})  
}

FilterForSearch(PurchasedCards)
MakeTrackingFalse()