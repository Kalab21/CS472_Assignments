/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
let myArray=[1,2,3,4];
let sum= myArray.reduce((a,b) => a+b);
console.log(sum); //10

let multiply= myArray.reduce((a,b) => a*b);
console.log( multiply); //10


let mystr="hello";
let reversed= [...mystr].reverse().join("");
console.log(reversed); //"olleh"



function filterLongWords(arr, n){
    let newArr = [];
    arr.forEach(value => {

    if(value.length > n){
    newArr.push(value);
    }
    });
    return newArr;
}
console.log(filterLongWords(["hi", "hello","hola"],2)); 



//  let myArr=["hi", "hello","hola"];
//  let n=2;
//  let filterLongWords2= [...myArr].filter((newArr,n)=>newArr.length>n

//  );
   
//  console.log(filterLongWords2,2);

