// Variables and Types Video
let wordData = "Word List"
console.log(wordData);

let subTotal = 100;
let tax = subTotal * .07;
let totalWithTax = tax + subTotal;

// Data Types- (boolean, null, undefined, number, string)
let obj = {
    key1: "value",
    key2:4,
    boolean:true,
    obj2: {
        objKey1: "Internal object value",
    }
}
console.log(obj.key1)


 // Typing (Static or dynamic)
let var1 = "2"
let var2 = 5
let result = var1 + var2
console.log(result)

// Operators
let add= 1+2
let sub = 2-1
let mult = 2*4
let division = 4/2
let mod = 5 % 2
let string = "string 1" + "string 2"
console.log(string)

//Conditionals and Functions Video

let equ = 1 === 1;
let greaterThan = 5 > 1;
let lessThan = 2 < 10;
let greaterThanEq = 5 >= 5;
let lessThanEq = 4 <= 9;
let notEqual = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;
let storeAIsLower = storeA < storeB
console.log(storeAIsLower)

function compareStorePrices(storeA, storeB){
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
    console.log( "store A has a lower price")
    } else if (storeB < storeA) {
    console.log( "store B has a lower price")
    } else  {
    console.log("prices are equal")
    }
}

function squareNum (num) {
    return num * num;
}

let squaredNumber = squareNum(7);
console.log(squaredNumber)

let x= 10;
function addNums ( n,m) {
    return n + m;
}

let ourArray = [1,2,3,4,5, ['a', 'b', 'c']]
console.log(ourArray[0] )

let arrLen = ourArray.length;

for (let i = 0; i < arrLen; i++) {
    // console.log("i is equal to: " + i)
    console.log(ourArray[i])
}

//  APIs Objects and Interfaces
let dog = {
    name : 'Steve',
    color: 'brown',
    size: 'small',
    bark: function (typeOfBark) {
        console.log('bark')
    }
}

function x (y) {
    y = y + 5;
    console.log(y)
}
let y = {
    name:"Tom",
    num:10,

}
x(y);
console.log(y)