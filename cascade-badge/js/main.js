//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

// function reversedPokemon(pokemon){
//  console.log(pokemon.reverse())
// }
// reversedPokemon(['one','two','three','four','five'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// let arrayA = [1,2,3]
// let arrayB = [1,2,3]

// let reducedA = arrayA.reduce((a,b)=> a+b**2,0)
// let reducedB = arrayB.reduce((acc,c)=>acc+Math.pow(c,3),0)

// function arrayIsMore(){
//  return (reducedA > reducedB)
// }
// console.log(arrayIsMore())


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

// let array = [22, -6, 32, 82, 9, 25] //9%4 = 2.5 , 25%5 = 0

//function isMultiple(array){
//   return array.filter((e,i)=> e % i === 0)
// }

//OR
function getMultiplesOfIndex(arr) {
  const result = [];
  arr.forEach((element, index) => {
    element % index === 0 ? result.push(element) : null;
  });
  return result;
}

const arr1 = [22, -6, 32, 82, 9, 25];
const result1 = getMultiplesOfIndex(arr1);
console.log(result1);


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValue (arr){
  return arr.reduce((acc,c)=>+acc + +c , 0)
}
console.log(sumOfValue(['5',4,'3',2,'1']))
