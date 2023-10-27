alert ("bienvenido/a");

confirm("¿desea calcular monto en cuotas?")
if(true){
    function calcular(montoTotal,cuotas){
        montoTotal=parseFloat(prompt("ingrese un monto determinado"));
        while (montoTotal<2000){
            alert("el monto debe ser de al menos $2000")
            confirm("¿desea ingresar otro monto?")
            if (confirm=true){
                calcular()
            }
        }
        cuotas=parseInt(prompt("ingrese cantidad de cuotas deseadas"));
        let resultado= montoTotal / cuotas;
        alert ("deberá pagar "+cuotas +" cuotas de "+resultado);
    }
}

calcular()