export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1',
      Purchased:false
    }];
  }
}
//console.log(cart)
export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
 if(productId.Purchased !== true){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId && cartItem === true){
          matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1',
      Purchased:false,
      tracking:false
    });
  }
 }
  saveToStorage();
}
export function ChangingCartArray(date,summ, id, day, name) {

  // Iterate through each cart item
  console.log(date.summ)

  cart.forEach((cartItem) => {
    if(cartItem.productId === id){
    cartItem.Purchased = true;
    cartItem.dateString = date;
    cartItem.price = summ;
    cartItem.day = day;
    cartItem.name = name, 
    cartItem.tracking = false
    // Assign the price to the cartItem
    }
  });
  // Save the updated cart to storage
  saveToStorage(cart);
}
export function MakeTrackingFalse(){
  cart.forEach((cartItem)=>{
    cartItem.tracking = false
  })
  saveToStorage(cart);
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}