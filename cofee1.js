let homeSearch = document.querySelector("#home-search");
let searchBtn = document.querySelector("#home-search-btn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = homeSearch.value.toLowerCase();
  localStorage.setItem("coffeesearch",value);
  window.location.href="menu.html";
});
let order = document.querySelectorAll(".order-btn");
order.forEach( (odr) => {
  odr.addEventListener("click" , () => {
  localStorage.setItem("name",odr.getAttribute("data-name"));
  localStorage.setItem("price",odr.getAttribute("data-price"));
  localStorage.setItem("img",odr.getAttribute("data-image"));
  window.location.href = "order.html";
  })
})