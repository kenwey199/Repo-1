
function calc() {
    let num1 = +prompt("Enter your first number");
    let num2 = +prompt("Enter your second number");
    let operation = prompt("what operation do you want (+,-,*,/)")
    let result;
    console.clear();

    switch (operation) {
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            console.log(result);
            break;
        case '*':
            result = num1 * num2;
            console.log(result);
            break;
        case '/':
            result = num1 / num2;
            console.log(result);
            break;
        default:
            console.log("wrong Operations");
    }
    console.log(result);

    function repeat() {
        let isture = confirm("do you want to continue with the  output?");
        if (isture == 1 && result != 0) {
            let newNumber = +prompt("enter the new number");
            let newOperation = prompt("what operation do you want (+ , - , * , /)")
            console.clear();
            switch (newOperation) {
                case '+':
                    result += newNumber;
                    console.log(result);
                    break;
                case '-':
                    result -= newNumber;
                    console.log(result);
                    break;
                case '*':
                    result *= newNumber;
                    console.log(result);
                    break;
                case '/':
                    result /= newNumber;
                    console.log(result);
                    break;
                default:
                    console.log("wrong op");
            }

            console.log(result);
            repeat()
        }
        else {
            result = 0;
        }
        console.clear();
    }
    repeat();
}
