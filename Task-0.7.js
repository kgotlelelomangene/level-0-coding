//Task 0.7
console.log("\nTask 0.7 ");

function celsiusToFahrenheit(num){
  var fahrenheit = (num * (9/5)) + 32;

  return fahrenheit;

}

console.log(celsiusToFahrenheit(10));


function fahrenheitToCelsius(num){
    var celsius = (num - 32) * (5/9);

  return celsius;

}
console.log(fahrenheitToCelsius(50));