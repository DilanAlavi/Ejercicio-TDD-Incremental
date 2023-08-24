
import totalizadorVentas from "./totalizador_venta";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const tird=document.querySelector("#estado");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const calu = new totalizadorVentas();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);


  div.innerHTML = "<p>" + "Precio neto: " + calu.calculadora(firstNumber, secondNumber) + "<br>" + "impuesto: " +  calu.verificarCodigo(tird.value) + "<br>" + "</p>" ;
});
