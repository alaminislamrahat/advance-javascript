const num = [2, 4, 3, 5, 7, 9];

const result = num.map( x => x * x);
console.log(result);

const bigger = num.filter( x => x > 4);
console.log(bigger);

const largest = num.find( x => x > 4);
console.log(largest);