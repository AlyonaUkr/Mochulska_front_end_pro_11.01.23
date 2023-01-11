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