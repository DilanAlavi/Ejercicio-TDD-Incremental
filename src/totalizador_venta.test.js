
import totalizadorVentas from "./totalizador_venta";


describe("Cantidad De Items", () => {
  it("deberia devolver el precio neto", () => {
    const calcular = new totalizadorVentas();
    expect(calcular.calculadora(10, 1)).toEqual(10);
  });

});
