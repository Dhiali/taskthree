addValue = () => {
    let one = +document.getElementById("one").value; 
    let two = +document.getElementById("two").value;
    let plus = document.getElementById("operation").value;
    let minus = document.getElementById("operation").value;
    let divide = document.getElementById("operation").value;
    let multiply = document.getElementById("operation").value;
    

    if (operator === "+") { result = number1 + number2;} else if (operator === "-") {
        result = number1 - number2;
      } else if (operator === "*") {
        result = number1 * number2;
      } else if (operator === "/") {
        result = number1 / number2;
      } else {
        console.log("Invalid operator");
        
      }


    console.log("result" + result)
    console.log(one,operation,two,plus,minus,divide,multiply);
}


    

    