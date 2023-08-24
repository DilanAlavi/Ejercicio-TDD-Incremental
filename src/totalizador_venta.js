class totalizadorVentas
{
    calculadora(precio, cantidad)
    {
        return precio*cantidad;
    }
    verificarCodigo(stateCode)
  { 
    const taxes = {
      UT: 6.65,
      NV: 8.00,
      TX: 6.25,
      AL: 4.00,
      CA: 8.25
    };

    return taxes[stateCode];
  }
}
export default totalizadorVentas;