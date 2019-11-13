function fizzBuzz(arr) {
  let newArr = [];
  arr.forEach(el => {
    if ( (el % 3 === 0 || el % 5 === 0) 
          && !(el % 3 === 0 && el % 5 === 0) ) {
      newArr.push(el);
    }
  });
  return newArr;
}

console.log(fizzBuzz([3, 5, 6, 9, 10, 12, 15, 30]));

let isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));

let firstNPrimes = (num) => {
  let i = 0, j = 2, primes = [];
  while (i < num) {
    if (isPrime(j)) {
      primes.push(j);
      i++;
    }
    j++;
  }
  return primes;
}
console.log(firstNPrimes(3));

let sumOfPrimes = (num) => {
  let sum = 0;
  firstNPrimes(num).forEach(el =>{
    sum += el;
  });
  return sum;
}

console.log(sumOfPrimes(0));
console.log(sumOfPrimes(1));
console.log(sumOfPrimes(4));