//tasks-1: Take four parameters. Multiply the four numbers and then return the result
function Multiply(num,num1,num2,num3){
    const resultMilti = num * num1 * num2 * num3;
    return(resultMilti);
}

const multiNumbers = Multiply(5,78,2,45)

console.log('Thsi is multiply from all numbers of arguments ',multiNumbers);

//tasks-2: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function eveenOdd(number){
    if(number % 2 === 0){
        const eveenNum = number / 2;
        return eveenNum;
    }
    else{
        const oddNumber = number * 2;
        return oddNumber;
    }


}

const inputNumber = 43;
;
console.log('This is a odd/eveen number task:',eveenOdd(inputNumber))


//Tasks-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numArray){
    let newArray = []
    for(const number of numArray){
         const avgNumber = number / 2;
         parseInt(avgNumber);
         newArray.push(avgNumber);
    }
    return newArray;
}

const num4 = [34,56,23,56]
const callFunc = make_avg(num4)

console.log('This is avarage of array number',callFunc)

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function count_zero(binaryString) {
    // Count the number of '0's in the binary string
    let zeroCount = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            zeroCount++;
        }
    }

    return zeroCount;
}

const binaryNumber = '10001011100110';

console.log('This is zero of binery', count_zero(binaryNumber));

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(songkha){
    if(songkha % 2 === 0){
        console.log('This is an even number');
    }
    else{
        console.log('This is an odd number');
    }
}

odd_even(44.10);