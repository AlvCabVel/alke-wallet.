$(function(){

const botonDeposito = $("#botonDeposito");
let inputDepositAmount = $("#depositAmount");

$(botonDeposito).on("click", function(e){
    e.preventDefault()

    let montoADepositar =parseFloat($(inputDepositAmount))
    
    if (isNaN(montodepositar) || )
})
})




--------------------------------------------------------------------------


function actoDepositar(e) {
    e.preventDefault()
    let montoADepositar = parseFloat(inputDepositAmount.value)
    // quiero hacer una condicional en la que si la persona hace click en el boton, el monto registrawdo a depositar sea sumado al local storage.
    es decir, colocar monto -> apretar boton -> se suma al localstorage el monto + se borra el monto escrito.
    if (isNaN(montoADepositar) || montoADepositar <= 0) {
        alert("Ingrese un monto valido");
        //devuelva el valor ingresado a como se encontraba antes
        depositAmount.value = "";
        return;
    } else { 
        let montoActual = parseFloat(localStorage.getItem("montoTotal")) || 0;
        let nuevoMonto = montoActual + montoADepositar;
        localStorage.setItem("montoTotal", nuevoMonto);
        inputDepositAmount.value = ""
        alert(`Deposito existoso, monto total $${nuevoMonto.toFixed(2)}`)
        console.log("Monto total en la cuenta:", nuevoMonto);
    }
    //corroborar cuanto es lo que hay en el deposito y confirmar si el deposito se realizó
    console.log("verificación final:", localStorage.getItem("montoTotal"))

}
//boton que acciona la funcion de agregrar el monto al localstorage.
botonDeposito.addEventListener("click", actoDepositar)*/