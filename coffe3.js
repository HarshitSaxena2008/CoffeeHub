let selectedCoffee = null;
    
    const name = localStorage.getItem("name");
    const price = localStorage.getItem("price");
    const image = localStorage.getItem("img");

    selectedCoffee = {
      name,
      price,
      image
    };

let order = document.querySelector(".order");

let display = () => {
    alert("WelCome to Coffee Hub!\nThanks for choosing us!!");
    order.innerHTML = "";
    if( !name ) {
      order.innerHTML = `
    <h3 style = "margin-top : 100%" class="text-white">No Order Placed☕</h3>
    `
    } else {
    order.innerHTML = `

  <div class="order-card card shadow-lg border-0 p-4 rounded-4">

    <h1 class="text-center mb-3">☕ Order Coffee</h1>

    <hr class="border opacity-100" style="border-color : #3E2723 !important;">

    <img
      src= "${image}"
      class="img-fluid rounded-4 mx-auto d-block mb-3"
      style="height:220px; object-fit:cover;"
      alt="Coffee">

    <h3 class="text-center mb-3">${name}</h3>

    <label class="form-label">Quantity</label>

    <input
      type="number"
      value="1"
      min="1"
      id="qty"
      class="form-control mb-3">

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">Total</h5>
      <h4 class="mb-0 text-warning" id="totalPrice" >₹${price}</h4>
    </div>

    <button class="btn text-white fw-bold confirm" style="background-color:#3E2723;">
      Confirm Order
    </button>

  </div>

</div>`
  }
}
display();

const qtyInput = document.getElementById("qty");
const totalPrice = document.getElementById("totalPrice");

qtyInput.addEventListener("input", () => {
    const qty = Number(qtyInput.value) || 1;

    totalPrice.innerText = `₹${qty * Number(price)}`;
});
let confrm = document.querySelector(".confirm");
confrm.addEventListener("click",()=>{
    alert("🎉Order placed successfully!\nYour delicious coffee will be ready soon. ☕");
    const name = localStorage.removeItem("name");
    const price = localStorage.removeItem("price");
    const image = localStorage.removeItem("img");
    order.innerHTML = `
    <h3 style = "margin-top : 100%" class="text-white">No Order Placed☕</h3>
    `
    window.location.href = "menu.html";
})