// function declaration and invoking
function greet(){
  console.log('hello there');
}

// invoke the function 
greet();


// function expression
const speak = function(){
  console.log('good day!');
};

// invoking the function
speak();


function bye(){
  console.log('goodbye dear');
}

bye();
greet();

// // pass value in a function. we create variables name and time in the function 
// const hello = function(name, time){
//   console.log(`hello, have a great ${time} ${name}`);
// };

// hello('mario', 'morning');


// we add default paramenters in case we dont have value for the variables created in the f
// const hello = function(name = 'Luigi', time = 'afternoon'){
//   console.log(`hello, have a great ${time} ${name}`);
// };

// hello('shaun');
// hello('Guillaume');
// greet();


//return the value to a global scope. We put it in a const global
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

//we are able to reuse the value that a function brings back to us


// arrow function
// const calcArea = (radius) => {
//   return 3.14 * radius**2;
// };
// const area = calcArea(5);
// console.log('area is:', area);

// //even more simplified the function arrow can be 
// const calArea = radius => 3.14 * radius**2;


//exemple of turning to arrow functions 
// const greet = function(){
//   return 'Hello world, how are you';
// };

const hola = () => 'Hello world, how are you';
const result = hola();
console.log(hola);
