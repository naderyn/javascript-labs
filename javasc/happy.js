let count = 0;
let number = 1;

while (count < 5)
 {
  let sum = 0;
  let temp = number;
  while (sum !== 1 && sum !== 4) { // exit condition 
    sum = 0;
    while (temp > 0) {
      const digit = temp % 10;
      sum += digit * digit;
      temp = Math.floor(temp / 10);
    }
    temp = sum;
  }
  if (sum === 1) { // If the sum of squares of digits is 1, it is a happy number
    console.log(number);
    count++;
  }
  number++;
}


