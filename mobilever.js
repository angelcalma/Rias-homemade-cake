const mobilenav = document.querySelector(".mobile-nav");

const open = document.querySelector(".mobile-nav .menu-bar");

const close = document.querySelector(".mobile-nav .cross");


open.addEventListener("click",() =>{
  mobilenav.classList.add("active");

} );

close.addEventListener("click",() =>{
  mobilenav.classList.remove("active");

} );