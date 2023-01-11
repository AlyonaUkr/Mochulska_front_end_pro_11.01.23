// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
const firstArrey = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
const numberArrey = firstArrey.filter(item => typeof item === 'number');
console.log(average(numberArrey));

// Вивести результат математичної дії, вказаної в змінній znak. 
// Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '**':
      return x ** y;
    default:
      alert('Sorry this operation do not exist');
  } 
}
const x = Number(prompt('Введіть x'));
const y = Number(prompt('Введіть y'));
const znak = prompt('Введіть знак (+, -, *, /, %, **)');
alert(doMath(x, znak, y));
