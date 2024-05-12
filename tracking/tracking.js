import { cart } from '../data/cart.js'
import { getProduct } from '../data/products.js'
export function Tracking(takingId){
    let MathingCart = cart.filter((i)=>i.productId === takingId)
    let trackingCart = '';
    let MathingId = getProduct(takingId).orderSheet
  MathingCart.forEach((cartItem)=>{
    trackingCart = 
    `<div class="delivery-date">
     Arriving on ${cartItem.dateString}
        </div>
    
    <div class="product-info">
    ${MathingId.name}
    </div>
    
    <div class="product-info">
    Quantity: ${cartItem.quantity}
    </div>
    
    <img class="product-image" src="${MathingId.image}">
    `
  });

    document.querySelector('.delivery-cart').innerHTML = trackingCart
}
cart.filter((item)=>{
    if(item.tracking === true){
        Tracking(item.productId)
    }
})
