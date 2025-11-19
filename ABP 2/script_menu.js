let montoActual = $("#montoActual")

let saldo = parseFloat(localStorage.getItem("#montoTotal")) || 0; 

montoActual.text(saldo.toFixed(2))