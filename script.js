function appendToDisplay(value) {
    document.getElementById('display').value += value;
    
}

function clearToDisplay() {
    document.getElementById('display').value = '';
    
}

function calculate() {
        var expressao = document.getElementById('display').value;
        var resultado = eval(expressao);
        document.getElementById('display').value = resultado;

    
}