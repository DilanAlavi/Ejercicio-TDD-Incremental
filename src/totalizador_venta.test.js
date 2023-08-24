
import describer from "./totalizador_venta";

describe("Cantidad De Items", () => {
  it("deberia devolver el numero ingresado", () => {
    expect(describer(10)).toEqual(10);
  });
});
