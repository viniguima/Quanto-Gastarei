function calcularGastoGasouAlc(){
    var precoGas = parseFloat(document.getElementById('valorGas').value);
    var precoAlc = parseFloat(document.getElementById('valorAlc').value);

    var divisaoCombust = precoAlc/precoGas;

    if(divisaoCombust < 0.7){
        document.getElementById('resultado').innerHTML = 'É recomendável abastecer com álcool(etanol).'
    } else if(divisaoCombust > 0.7) {
        document.getElementById('resultado').innerHTML = 'É recomendável abastecer com gasolina.'
    }else{
        document.getElementById('resultado').innerHTML = 'Insira um valor'

    }

    }