var numbers = [2, 4, 7, 4, 7, 2];
var number = 4;
console.log('Ищем индекс числа ' + number + ' в массиве : ' + numbers);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) {
    var lastIndex = i;
  }
}

if (!lastIndex) {
    lastIndex = -1;
}

console.log('Индекс искомого числа в массиве равен = ' + lastIndex);
