function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

function backspace() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    
    // Verifique se há caracteres para excluir
    if (currentValue.length > 0) {
        // Remova o último caractere
        display.value = currentValue.slice(0, -1);
    }
}