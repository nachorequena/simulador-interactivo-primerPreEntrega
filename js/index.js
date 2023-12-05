
function calculo(monedaEnvio, cantPesos) {
    let precioDolar = 910
    let precioEuro = 956
    let precioLibra = 457
    let precioReal = 73
    let costoTotal;
    switch (monedaEnvio) {
        case "dolar":
            costoTotal = cantPesos / precioDolar
            alert("Podes comprar " + costoTotal + " Dolares")
            break
        case "euro":
            costoTotal = cantPesos / precioEuro
            alert("Podes comprar " + costoTotal + " Euros")
            break
        case "libra":
            costoTotal = cantPesos / precioLibra
            alert("Podes comprar " + costoTotal + " Libras")
            break
        case "real":
            costoTotal = cantPesos / precioReal
            alert("Podes comprar " + costoTotal + " Reales")
            break
    }
}




let continuar = "si"
while (continuar == "si") {
    monedaEnvio = prompt("seleccione la moneda que desea comprar(Dolar, Euro, Libra, Real: ")
    //condicional para que solo ingrese una de las opciones validas
    while (monedaEnvio != "dolar" && monedaEnvio != "euro" && monedaEnvio != "libra" && monedaEnvio != "real") {
        monedaEnvio = prompt("por favor escriba una de las opciones solicitadas(Dolar, Euro, Libra, Real: ")
    }
    cantPesos = parseInt(prompt("ingrese el monto en pesos: "))
    calculo(monedaEnvio, cantPesos);
    continuar = prompt("quieres calcular nuevamente?(Si/No) ")
}





