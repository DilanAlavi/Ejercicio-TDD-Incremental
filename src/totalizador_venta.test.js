
import totalizadorVentas from "./totalizador_venta";


describe("Cantidad De Items", () => {
  it("deberia devolver el numero ingresado", () => {
    const calcular = new totalizadorVentas();
    expect(calcular.calculadora(10)).toEqual(10);
  });

  it("deberia devolver el precio ingresado", () => {
    const calcular = new totalizadorVentas();
    expect(calcular.calculadora(10)).toEqual(10);
  });
  
});
