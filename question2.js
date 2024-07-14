function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    const tokens = expression.match(/-?\d+|[+-]/g);

    let result = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const value = parseInt(tokens[i + 1]);

        if (operator === '+') {
            result += value;
        } else if (operator === '-') {
            result -= value;
        }
    }

    return result;
}

const expression = "10 + 20 - 5 + 3";
const result = evaluateExpression(expression);
console.log(result); 
