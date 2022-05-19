var lastNumber = 5;
var multiplicationResult = 1;
for (var i = 1; i <= lastNumber; i++) {
    if (i % 2 === 0) {
      multiplicationResult *= i;
      console.log(multiplicationResult);
      } 
  }
