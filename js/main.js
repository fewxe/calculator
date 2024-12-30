window.onload = function () {
    const operandHandler = (event) => {
        const calc = new Calculator;
        const a = calc.getValue(document.getElementById('a').value);
        const b = calc.getValue(document.getElementById('b').value);
        const operand = event.target.dataset.operand;
        const result = calc[operand](a, b);
        if (result === null) {
            document.getElementById('c').value = 'Ошибка';
        } else {
            document.getElementById('c').value = result.toString();
        }
    }

    const getValueHandler = () => {
        const calc = new Calculator;
        const a = calc.getValue(document.getElementById('a').value);
        const x = calc.getValue(document.getElementById('b').value);
        document.getElementById('c').value = a.getValue(x).toString();
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    });

    document.getElementById('get-value')
        .addEventListener('click', getValueHandler);
};   