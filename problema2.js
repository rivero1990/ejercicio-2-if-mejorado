const CONVERSION_DOLAR = 39684.40;
const CONVERSION_ETHEREUM = 13.5400;
const CANT_BTC_DEF = 0;

const inputCantidadBtc = document.querySelector("#btc-ingresado");
const cambioDolar = document.querySelector("#dolar-conversion");
const cambioEthereum = document.querySelector("#ethereum-conversion");
const resultadoFinal = document.querySelector("#conversion-final");


function conversion() {
    
    let cambio1 = cambioDolar.value;
    let cambio2 = cambioEthereum.value;

    if (cambio1 == "Si") {
        resultadoFinal.innerHTML = ("Su conversion es " + (CONVERSION_DOLAR * inputCantidadBtc.value) + " dolares");
    } else if (cambio2 == "Si") {
        resultadoFinal.innerHTML =("Su conversion es " + (CONVERSION_ETHEREUM * inputCantidadBtc.value) + " ethereum");
    } 
    
    else {
        resultadoFinal.innerHTML =("Numero de bitcoins o moneda a cambiar invalido : intente nuevamente");
}

}