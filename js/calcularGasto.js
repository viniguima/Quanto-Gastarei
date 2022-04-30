
function calcularGasto(){
    var inputDistancia = parseFloat(document.getElementById('distancia').value),
     inputAutonomia = parseFloat(document.getElementById('autonomia').value),
     inputPrecGasolina = parseFloat(document.getElementById('precoGas').value)

     var resultAutonomia = (inputDistancia / inputAutonomia)

     var totalGasolina = resultAutonomia*inputPrecGasolina
     var err = 'Adicione um número válido'
     var resultadoFinal = inputAutonomia,inputDistancia,inputPrecGasolina

     if(isNaN(resultadoFinal)) {
        document.getElementById('resultado').innerHTML = err;

     }else {
     document.getElementById('resultado').innerHTML = `Você gastará: R$${totalGasolina.toFixed(2)} e prescisará de ${resultAutonomia.toFixed(3)} Litros de gasolina.`;
     }

    }
    
