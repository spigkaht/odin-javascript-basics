function add7(number) {
  return number + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(string) {
  let stringEnd = string.slice(1);
  return string.charAt(0).toUpperCase() + stringEnd.toLowerCase();
}

function lastLetter(string) {
  return string.slice(-1);
}

console.log(add7(7));
console.log(multiply(5, 7));
console.log(capitalize("BALLS"));
console.log(lastLetter("balls"));