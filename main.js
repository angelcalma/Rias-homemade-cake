
const addToCartBtns = document.getElementsByClassName("addtocart");
const cartCount = document.getElementById("cartnum");

let count = 0;

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
}