
//return value also use on a new variable, and it work like a variable 
function halfNumber(number){
    let result = number / 2;
    return result
}

const myNum = halfNumber(111);
console.log('The half number of value is :',myNum);

const addNumber = myNum + 100;

console.log('this is a add number from value of retun on a function :',parseInt(addNumber))