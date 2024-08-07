
// show eveen number of an array 
function allEveenNUmbers (numbers){
    const newArray = [];
    for(const num of numbers){
        if(num % 2 === 0){
            // console.log(num)
            newArray.push(num);
        }
        
    }
    return newArray;
}

const number = [12,45,34,56,83,46];
const showNumber = allEveenNUmbers(number);
// console.log('This is eveen number array',showNumber)


// show odd number of an array 

function oddNumbersShow (numbers){
    let oddArray = [];
    for(const num of numbers){
        if(num % 2 === 1){
            console.log(num);
            oddArray.push(num);
        }
    }
    return oddArray;
}

const num2 = [35,44,56,24,53,75,89];
const oddNumber = oddNumbersShow(num2);

console.log('This are all of odd number from array', oddNumber);