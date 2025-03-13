let shop_btn = document.querySelector(".shop-btn")
let seller_btn = document.querySelector(".selller-btn")
// eventlistener for opening shop.html
shop_btn.addEventListener("click", () => {
    window.location.href = 'home.html';
});


seller_btn.addEventListener("click", () => {
    window.location.href = 'seller.html';
});

