function getLength(arr){
  return arr.length;
}

function getSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

function getMean(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i = i + 1){
    mean = ((sum + arr[i]) / (arr.length));
  }
  return mean;
}

function getMin(arr){
  return Math.min.apply(Math, arr);
}

function getMax(arr){
  return Math.max.apply(Math, arr);
}

function getRange(arr){
  return (Math.max.apply(Math, arr) - Math.min.apply(Math, arr));
}

function getEvens(arr){
  return arr.filter(arr => arr % 2 === 0)
}

function getOdds(arr){
    return arr.filter(arr => arr % 2 === 1)
}

const numbers = [1, 3, 3, 5, 8, 9, 20]
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);