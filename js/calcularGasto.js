
function calcularGasto(){
    var inputDistancia = parseFloat(document.getElementById('distancia').value),
        inputAutonomia = parseFloat(document.getElementById('autonomia').value),
        inputPrecGasolina = parseFloat(document.getElementById('precoGas').value)
        inputViagens = parseInt(document.getElementById('viagens').value)

     var resultAutonomia = (inputDistancia / inputAutonomia)
     var totalGasolina = resultAutonomia*inputPrecGasolina
     var resultViagensGas = totalGasolina*inputViagens
     var resultViagensAut = resultAutonomia*inputViagens
     var err = 'Adicione um número válido'
     var resultadoFinal = inputAutonomia,inputDistancia,inputPrecGasolina

     if(isNaN(resultadoFinal)) {
        document.getElementById('resultado').innerHTML = err;

     } else {
     document.getElementById('resultado').innerHTML = `Você gastará: R$${resultViagensGas.toFixed(2)} e prescisará de ${resultViagensAut.toFixed(2)} Litros de gasolina.`;
     }

    }
    
