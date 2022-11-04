

    /* 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. */
    function max(x, y) {
        if (x > y) {
            return x;
        } else {
            return y;
        }
    }
    
    let maxNum= max(3, 6);
    console.log("The max numis: "+ maxNum)
    
    /* 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
    function maxOfThree(x, y, z) {
        if (x > y && x > z) {
            return x;
        } else if (y > x && y > z) {
            return y;
        } else {
            return z;
        }
    }
    
   let maxOf3 = maxOfThree(3, 6, 9);
   console.log("Max of three is : "+ maxOf3)
    
    /* 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
    function
    isVowel(y) {
        let vowels = "aeiou";
    
        if (vowels.includes(y)) {
            return true;
        }
    
        return false;
    }
    
    let isVol = isVowel("u");
    console.log("Is vowels: " + isVol)

    
    /* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an 
    input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: 
    Do these using Imperative programming approach (i.e. for…loop or while…loop). */
    function sum(arr) {
        let total = 0;
    
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
    
        return total;
    }
    
    function multiply(arr) {
        let total = 1;
    
        for (let i = 0; i < arr.length; i++) {
            total *= arr[i];
        }
    
        return total;
    }
    
    let sum_multy =
        sum([1, 2, 3, 4]) + ", " + multiply([1, 2, 3, 4]);
        console.log("Sum and multipy: "+ sum_multy)
    
    /* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
    function reverse(str) {
        let rev = "";
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        return rev;
    }
    
     let revers=  reverse("jag testar");
     console.log("The revers of string: "+revers)
    
    /* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */
    function findLongestWord(arr) {
        let longest = 0;
        let n = arr.length - 1;
        while (n >= 0) {
            if (longest < arr[n].length) longest = arr[n].length;
            n--;
        }
    
        return longest;
    }
    
    let longWord = findLongestWord([
        "javascript",
        "html is very nice",
        "css give decor",
        "Kalabe kebede",
        "web application",
        
    ]);
    console.log("The longest Word is: "+longWord)
    
    /* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters. */
    function filterLongWords(arr, i) {
        return arr.filter((word) => word.length > i);
    }
    
    let filtLongW = filterLongWords(
        ["javascript", "html is the inicial to web", "css hlpe to dicor", "ecmascript", "web application"],
        10
    );
    console.log("Filter the longest Word len greater than 10: "+filtLongW)

    /*Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
    
    a) multiply each element by 10; 
    
    b) return array with all elements equal to 3; 
    
    c) return the product of all elements; */

    const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
 let mult = b;
 console.log("Multply by 10 is: "+mult)

const c = a.filter(function(elem, i, array){
  return elem == 3;});
let equl3 = c;
console.log("Equql to three is: "+equl3)

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
let productNums= d;
console.log("The product of numbers: "+productNums)
