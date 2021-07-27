/* part 1.problem1 : sum takes an array of numbers as argument and returns sum of all the numbers */
function sum(array){
    return array.reduce((accm, currVal) => {
        return accm + currVal;
    });
}

/* part1.problem1 : multiply takes an array of numbers as argument and returns product of all the numbers */
function multiply(array){
    return array.reduce((accm, currVal) => {
        return accm * currVal;
    });
}

// part1.problem2 : reverse takes a string as argument and returns its reverse string
function reverse(string){
    return string.split("").reverse().reduce((ch1, ch2) => {
        return ch1 + ch2;
    });
}

/* part1.problem3 : filterLongWords takes two arguments, an array of strings and a number and returns a string of array strings with length larger than that number */
function filterLongWords(arrOfStrings, i){
    return arrOfStrings.filter((str) => {
        return str.length > i;
    });
}

window.onload = () => {

    // initialize mocha
    mocha.setup('bdd');
    let assert = chai.assert;

    describe("sumOfNumericArray", function () {
        it("takes an array of numbers, and returns the sum of all the numbers",
            function () {
                assert.equal(10, sum([1, 2, 3, 4]));
            });
    });

    describe("productOfNumericArray", function () {
        it("takes an array of numbers, and returns the product of all the numbers",
            function () {
                assert.equal(24, multiply([1, 2, 3, 4]));
            });
    });

    describe("reverseAString", function () {
        it("takes a string, and returns the reverse of it",
            function () {
                assert.equal("hsenaG", reverse("Ganesh"));
            });
    });

    describe("filterLongWords", function () {
        it("takes an array of strings and a number, and returns an array of strings with lengths greater than number",
            function () {
                assert.equal(["Ganesh", "PrakashKumar"].toString(), filterLongWords(["Ganesh", "anil", "PrakashKumar"], 5).toString());
            });
    });

    mocha.run();

};