const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Problem 2
const getNumber = (sum) => {
    readline.question('Enter a number : ', number => {
        sum = sum === undefined ? 0 : sum;
        if (number === 'stop') {
            readline.close();
            console.log("Sum of all numbers = " + sum);
            return;
        }
        sum = parseInt(number) + sum;
        getNumber(sum);

    });
};
getNumber();



