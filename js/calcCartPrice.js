function calcCartPrice(){

   const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

cartItems.forEach(function (item){
   const amountEl = item.querySelector('[data-counter]');
   const priceEl = item.querySelector('.price__currency');

   const currentPrice = parseInt(amountEl.innerText) * priceInt(priceEl.innerText);
    totalPrice += totalPrice;
   })
}