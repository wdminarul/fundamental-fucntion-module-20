
//addition sum number a perameter 
function sumArrayOparation(numbers){
    let sum = 0;
    for(const num of numbers){
        console.log(num)
        sum = sum + num;
    }
    return sum;
}

const number = [45,23,56,12];
const sumNumber = sumArrayOparation(number);
console.log('Sum of number is :', sumNumber);