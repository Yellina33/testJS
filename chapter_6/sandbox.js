// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, my darling';
// }

const greet = () => 'hello, my darling';
const result = greet();
console.log(result);

//another exemple for functions with an array of parameter and values
// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }


//version of the arrow function above
const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(bill([10,15,30], 0.2));


//rappel

const bye = () => 'Bye bye team!';
let speakOne = bye();
console.log(speakOne);

// methods 
const surname = 'Bengochea';

// surname.toUpperCase()
let speakTwo = surname.toUpperCase();
console.log(speakTwo);



//callback function exemple


const myFunc = (callbackFunc) => {
  //do something
  let value = 50;
  callbackFunc(value);
};

myFunc(value => {
  //do something
  console.log(value);
});


// callback & foreach


let people = ['mario', 'luigi', 'maria', 'lucio', 'ryu', 'shaun'];

people.forEach(function(person){
  console.log(person);
});

//converted into arrow function

people.forEach(person => {
  console.log(person);
});





