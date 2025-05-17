/*Diffrent Datatypes in this like -> Numeric , string   */
// Numeric
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum of two numbers is: " + sum);
// String
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log("Concatenated string is: " + str3);
// Boolean

let isTrue = true;
let isFalse = false;
console.log("Boolean value is: " + isTrue);
// Undefined
let undefinedVar;
console.log("Undefined value is: " + undefinedVar);
// Null
let nullVar = null;
console.log("Null value is: " + nullVar);
// Symbol
let sym = Symbol("unique");
console.log("Symbol value is: " + sym);
// BigInt
let bigIntVar = BigInt(123456789012345678901234567890);
console.log("BigInt value is: " + bigIntVar);
// Object
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log("Object value is: " + JSON.stringify(obj));
// Array
let arr = [1, 2, 3, 4, 5];
console.log("Array value is: " + arr);
// Function
function greet(name) {
  return "Hello " + name;
}
console.log("Function value is: " + greet("John"));
// Date
let date = new Date();
console.log("Date value is: " + date);
// RegExp
let regex = /[a-z]/;
console.log("RegExp value is: " + regex);
// Map
let map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log("Map value is: " + JSON.stringify(Array.from(map)));
// Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log("Set value is: " + JSON.stringify(Array.from(set)));
// WeakMap
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "John");
console.log("WeakMap value is: " + weakMap.get(obj1));
// WeakSet
let weakSet = new WeakSet();
let obj3 = {};
weakSet.add(obj3);
console.log("WeakSet value is: " + weakSet.has(obj3));
// TypedArray
let typedArray = new Uint8Array([1, 2, 3, 4, 5]);
console.log("TypedArray value is: " + typedArray);
// ArrayBuffer
let arrayBuffer = new ArrayBuffer(16);
let int32View = new Int32Array(arrayBuffer);
console.log("ArrayBuffer value is: " + int32View);
// DataView
let dataView = new DataView(arrayBuffer);
console.log("DataView value is: " + dataView);
