const coffees = [
{name:"Iced Latte",price:190,image:"images/coffe8.png"},
{name:"Americano",price:140,image:"https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww"},
{name:"Latte",price:180,image:"images/coffe1.png"},
{name:"Cappuccino",price:150,image:"images/coffe2.png"},
{name:"Mocha",price:199,image:"images/coffe3.png"},
{name:"Macchiato",price:175,image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww"},
{name:"Flat White",price:185,image:"images/coffe7.png"},
{name:"Affogato",price:220,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Cold Coffee",price:170,image:"https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Espresso",price:120,image:"images/coffe5.jpg"},

{name:"Vanilla Latte",price:210,image:"https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Caramel Latte",price:220,image:"https://images.unsplash.com/photo-1562447457-579fc34967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Hazelnut Latte",price:225,image:"https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Irish Coffee",price:240,image:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Turkish Coffee",price:250,image:"https://images.unsplash.com/photo-1506372023823-741c83b836fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"French Roast",price:200,image:"https://plus.unsplash.com/premium_photo-1671379526961-1aebb82b317b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Cold Brew",price:230,image:"https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Nitro Cold Brew",price:260,image:"https://images.unsplash.com/photo-1561478908-d067fe75a553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Vanilla Cold Brew",price:240,image:"https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Caramel Cold Brew",price:245,image:"https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},

{name:"Chocolate Mocha",price:230,image:"https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"White Mocha",price:240,image:"https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Dark Mocha",price:250,image:"https://images.unsplash.com/photo-1497636577773-f1231844b336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Iced Mocha",price:235,image:"https://images.unsplash.com/photo-1575430232936-f06cb6c9f4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Mocha Frappe",price:255,image:"https://images.unsplash.com/photo-1503481766315-7a586b20f66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Coffee Frappe",price:240,image:"https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Vanilla Frappe",price:245,image:"https://images.unsplash.com/photo-1567309966795-5ad24aa39971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D"},
{name:"Caramel Frappe",price:250,image:"https://images.unsplash.com/photo-1458819714733-e5ab3d536722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D"},
{name:"Java Chip",price:270,image:"https://plus.unsplash.com/premium_photo-1671559021551-95106555ee19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D"},
{name:"Coffee Shake",price:210,image:"https://images.unsplash.com/photo-1522992319-0365e5f11656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D"},

{name:"Honey Latte",price:225,image:"https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Cinnamon Latte",price:230,image:"https://images.unsplash.com/photo-1562447457-579fc34967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Almond Latte",price:240,image:"https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Coconut Latte",price:245,image:"images/coffe4.jpg"},
{name:"Pistachio Latte",price:260,image:"images/coffe5.jpg"},
{name:"Signature Blend",price:280,image:"images/coffe6.jpg"},
{name:"Premium Roast",price:290,image:"images/coffe7.jpg"},
{name:"Coffee Deluxe",price:300,image:"https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Barista Special",price:310,image:"https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Coffee Hub Special",price:350,image:"https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"}
];

let menuContainer = document.getElementById("menuContainer");
console.log(menuContainer);
function displayProducts(items) {
  menuContainer.innerHTML = "";

  if(items.length === 0){
    menuContainer.innerHTML =
      `<h3 class="text-center mt-5 text-white">No Coffee Found ☕</h3>`;
    return;
  }

  items.forEach(coffee => {
    menuContainer.innerHTML += `
      <div class="col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow">
          <img src="${coffee.image}"
               class="card-img-top"
               style="height:220px;object-fit:cover">

          <div class="card-body text-center">
            <h5>${coffee.name}</h5>
            <p>${coffee.price} Rs</p>

            <button
              class="btn btn-dark order-btn"
              data-name="${coffee.name}"
              data-price="${coffee.price}"
              data-image="${coffee.image}">
              Order Now
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

const searchBox = document.getElementById("searchBox");

displayProducts(coffees);

const savedSearch = localStorage.getItem("coffeesearch");

if(savedSearch){
  searchBox.value = savedSearch;

  const filtered = coffees.filter(coffee =>
    coffee.name.toLowerCase().includes(savedSearch)
  );

  displayProducts(filtered);
  searchBox.value = "";
  localStorage.removeItem("coffeesearch");
}

searchBox.addEventListener("input", () => {
  
  const value = searchBox.value.toLowerCase();

  const filtered = coffees.filter(coffee =>
    coffee.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
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
// if( searchBox.innerText = "" ) displayProducts(coffees);

