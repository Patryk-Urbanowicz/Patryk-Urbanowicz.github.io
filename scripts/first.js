document.getElementById("submitButton").addEventListener("click", () => {
let number1 = parseFloat($("[name='number1']").val());
let operation = $("[name='operation']").val();
let number2 = parseFloat($("[name='number2']").val());
let result = $('#result');

if (!$('#calculatorForm')[0].checkValidity()) {
    alert("Należy podać dane (poprawne) w formularzu.");
} else {
    switch (operation) {
        case 'addition':
            result.text(number1 + number2)
            break;
        case 'subtraction':
            result.text(number1 - number2);
            break;
        case 'diversion':
            if (number2 == 0) result.text("Nie dzielimy przez zero :)");
            else result.text(number1 / number2);
            break;
        case 'multiplication':
            result.text(number1 * number2);
            break;
        case 'modulo':
            result.text(number1 % number2);
            break;
    }
}
});
