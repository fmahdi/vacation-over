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

//Arrays and Objects

const odd = [1, 3, 5, 7, 9, 11];
console.log(odd[1]);

const champion = {
    name: "Darius",
    country: "Noxius",
    age: 40,
    powers: ["q", "w", "e", "r"],
    skins: true,
    category: "Melee"
};
//data extraction
console.log(champion.name);
console.log(champion.age);
console.log(champion.powers);
console.log(champion["skins"]);
var extract = "category";
console.log(champion[extract]);

//template literals
var text = `THis is a text for test or test for ${box} & ${box1}`;
console.log(text);

var text = `THis is a text for test or test for ${champion.category} & ${champion["age"]}`;
console.log(text);

//spread operator
const oddCopy = [...odd];
const oddCopy1 = odd;
odd.push(99, 111);
console.log(odd);
console.log(oddCopy);
console.log(oddCopy1);
