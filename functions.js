/** 
 * ways of writing functions
 * 1. Function Declaration
 * 2. Function Expression
 * 3. anonymous Function
 * 4. Arrow Function
 */

// 1. Functipn Declaration//

function twoSum(num1, num2) {

    return num1 + num2
}
const result = twoSum(2, 4)
console.log(result)

//2. Function expression
const twoSumJs = function (num1, num2) {
    return num1 + num2
}
const result2 = twoSumJs(45, 5)
console.log(result2)

//3. Anonymous Function

// function (num1, num2) {
//     return num1 + num2
// }


const myArray = []
myArray.map(function (num1, num2) {
    return num1 + num2
}

)

//4. Arrow Function

const twoSumArrow2 = (num1, num2) => {

    return num1 + num2
    const result3 = twoSumArrow2(78, 45)
}
console.log(result3)
//4.1 Arrow Function - one-line
const twoSumArrow3 = (num1, num2) => num1 + num2
const result4 = twoSumArrow3(66, 45)

//WRITE A FUNCTION THAT TAKES IN 2 NUMBERS AND RETURNS THE LARGER NUMBER

function twoNumbers(num1, num2) {

    if (num1 < num2) {

        return num2
    } else {
        return num1
    }
}

const value = twoNumbers(num1, num2)
console.log('value')

//second question. store the result of
// then first function in a variable then 
//write another functionthat takes the result 
//and multiply by 2

function multiply(num1) {

    return num1 * 2
}
let moveZeroes = function(nums) {
    let i, temp;

    for (i = 0; i < nums.length-1; i++) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return null;
}































