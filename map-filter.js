const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// }

const result = numbers.map(x => x * x);

const result2 = numbers.filter(x => x > 5);

const result3 = numbers.find(x => x > 5);

console.log (result);
console.log (result2);
console.log (result3);
