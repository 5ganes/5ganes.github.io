function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } 
    else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
  
/* probmem 1 : max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } 
    else {
        return b;
    }
}

/* problem 2 : max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c); 
}

/* problem 3 : isVowel takes a character as an argument and returns true if it is vowel otherwise returns false */
function isVowel(c){
    cCode = c.toLowerCase().charCodeAt(0);
    if(cCode == 97 || cCode == 101 || cCode == 105 || cCode == 111 || cCode == 117)
        return true;
    else
        return false;
}

/* problem 4 : sum takes an array of numbers as argument and returns sum of all the numbers */
function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

/* problem 4 : multiply takes an array of numbers as argument and returns product of all the numbers */
function multiply(array){
    let product = 1;
    for(let i = 0; i < array.length; i++){
        product *= array[i];
    }
    return product;
}

/* problem 5 : reverse takes a string as argument and returns its reverse string */
function reverse(string){

    let reversedString = "";
    for(let i = string.length-1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;

    /* second way using array ******************************** */
    // reversedString = [];
    // for(let i = 0, j = string.length-1; i < string.length; i++, j--){
    //     reversedString[j] = string[i];
    // }
    // return reversedString.join('');
}

/* problem 6 : findLongestWord takes an array of strings as argument and returns length of a largest string */
function findLongestWord(arrOfStrings){
    let maxLength = 0;
    for(let i = 0; i < arrOfStrings.length; i++){
        if(arrOfStrings[i].length > maxLength)
            maxLength = arrOfStrings[i].length;
    }
    return maxLength;
}

/* problem 7 : filterLongWords takes two arguments, an array of strings and a number and returns a string of array strings with length larger than that number */
function filterLongWords(arrOfStrings, i){
    let retList = [];
    for(let j = 0; j < arrOfStrings.length; j++){
        if(arrOfStrings[j].length > i)
            retList.push(arrOfStrings[j]);
    }
    return retList.toString();
}

/* main function to test all the above functions */
function main(){

    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))); 
    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

    // there is a mistake in this test. 55 should be sent to testing function instead of 4, then test will pass
    // console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

    console.log("Expected output of isVowel('i') is true  " + myFunctionTest(true, isVowel('i')));
    console.log("Expected output of sum([1, 2, 3, 4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
    console.log("Expected output of product([1, 2, 3, 4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
    console.log("Expected output of reverse(\"Ganesh\") is \"hsenaG\"  " + myFunctionTest("hsenaG", reverse("Ganesh")));
    console.log("Expected output of findLongestWord(\"Ganesh\", \"Johnathan\", \"Anthony\") is 9  " + myFunctionTest(9, findLongestWord(["Ganesh", "Johnathan", "Anthony"])));
    console.log("Expected output of findLongestWords([\"Ganesh\", \"Johnathan\", \"Anthony\"], 6) is \"Johnathan\", \"Anthony\"  " + myFunctionTest('Johnathan,Anthony', filterLongWords(["Ganesh", "Johnathan", "Anthony"], 6)));

    
    
    // problem 8 : solutions ******************************************************
    const a = [1,3,5,3,3]; 
    
    // multiply each element by 10
    const result = a.map(function(el, i, arr){
        return el * 10;
    });
    console.log("Array after multiplying each element by 3 : " + result);

    // eturn array with all elements equal to 3
    const result1 = a.filter(function(el, i, arr) {
        return el === 3;
    });
    console.log("Array having elements with value 3 : " + result1);

    // return the product of all elements
    const product = a.reduce(function(preVal, el, i, arr){
        return preVal * el;
    });
    console.log("Product of all elements of array : " + product);


}

/* run javascript code when DOM(document) is fully loaded) */
document.addEventListener('DOMContentLoaded', main);