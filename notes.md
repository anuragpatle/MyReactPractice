React is a JavaScript library for building user interfaces.
React is all about components.

# 1 Arrow Functions
Arrow functions are used in order to deal with the problem of this keywords.

# 2 Spread and Rest Operators
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

# 3 Destructuring
+ Easily extract array elements or object properties and store them in variables

1. Array Destructuring

[a, b] = ['hello', 'Max']

console.log(a) //hello
console.log(b) //Max

2. Object Destructuring
{name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined


# 4 Reference and primitive types
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

# 5 JSX syntax
Writing html code with javascript code:

function App() {
  return (
    <div>
      <h2>Let's get --- started!</h2>
    </div>
  );
}


# 6 Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components consists of js, html, as well as CSS.

Components come in two types, Class components and Function components.

In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.

1. Class Components:
```
	class Car extends React.Component {

		render() {
			return \<h2>Hi, I am a Car!</h2>;
		}
	}
```

2. Function Components:

```
	function Car() {
  		return <h2>Hi, I am a Car!</h2>;
	}
```

# 6 React Hooks
Hooks allow function components to have access to state and other React features without writting classes. Because of this, class components are generally no longer needed.
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

# 6.1 useState
+ The React useState Hook allows us to track state in a function component.

+ State generally refers to data or properites that need to be tracking in an application.

+ We initialize our state by calling useState in our function component.

+ useState accepts an initial state and returns two values:
- The current state.
- A function that updates the state.

const [color, setColor] = useState("red");