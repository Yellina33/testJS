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
const hello = function(name = 'Luigi', time = 'afternoon'){
  console.log(`hello, have a great ${time} ${name}`);
};

hello('shaun');




