//Variables
var box = 197;
let box1 = 452;
const box2 = 32;

const sumBox = box + box1;
console.log(sumBox);

//Types
const interger = 1;
const nowFloat = 1.5;
const nowString = "Vainga CHuira Lankaw AGun";
const nowBoolean = false;
const weird = NaN;

//Functions
function addNow(first, second) {
    const sum = first + second;
    return sum;
};
console.log(addNow(2, 3));

//arrow fucntion
const ternDiv = (num1, num2) => num1 / num2;
console.log(ternDiv(10, 5));

//Conditions
function multiEven2(number) {
    if (number % 2 == 0) {
        const final = number * 2;
        return final;
    } else {
        return "Not an even number";
    }
};
console.log(multiEven2(2));
console.log(multiEven2(3));
console.log(multiEven2(0));
console.log(multiEven2("yes"));

//Looping
const collection = [12, 13, 14, 15];
let summUp = 0;
for (i = 0; i < collection.length; i++) {
    summUp += collection[i];
}
console.log(summUp);
