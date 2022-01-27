React is a JavaScript library for building user interfaces.
React is all about components.

## 1 Arrow Functions
Arrow functions are used in order to deal with the problem of this keywords.

## 2 Spread and Rest Operators
+ Spread Operator: Used to split up arry elements OR object properties. Denoted as '...'
const newArray = [...oldArray, 1, 2]

const newObject = {...oldObj, newProp: 5}

+ Rest Operator: Used to merge a list of function agruments into an array.
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);

With spread syntax the above can be written as:

function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);

Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.

function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## 3 Destructuring
+ Easily extract array elements or object properties and store them in variables

1. Array Destructuring

[a, b] = ['hello', 'Max']

console.log(a) //hello
console.log(b) //Max

2. Object Destructuring
{name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined


## Reference and primitive types
const person = {
	name: "Max"
};

const secondPerson = person;

person.name = 'Manu'

console.log(secondPerson); // [object Object] {name: "Manu"}

Note: you can see that secondPerson is pointing to person. Same happens with array as well.
Array and objects are pointers in javascript.


If you do not want such behaviour then use spread operator.

const secondPerson = {
	...person
}