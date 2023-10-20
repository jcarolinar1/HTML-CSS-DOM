let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

  let cantVentas = document.createTextNode(`${mejorVendedor}`);

  let body = document.body;

  body.appendChild(cantVentas);
});


let boton2 = document.getElementById("boton");

button.addEventListener("click", function() {

  let span = document.createElement("span");
  span.textContent = `${mejorVendedor}`;
  span.classList.add("highlight");
  div.appendChild(span);

let cantVentas = document.createTextNode(`${mejorVendedor}`);
let body = document.body;
body.appendChild(cantVentas);
});