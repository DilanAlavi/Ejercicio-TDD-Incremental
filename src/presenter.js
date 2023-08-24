
import totalizadorVentas from "./totalizador_venta";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const calu = new totalizadorVentas();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "El precio Neto: "+  calu.calculadora(firstNumber, secondNumber) + "</p>";
});
