let names = 'Oluwaseun'; //string literal
let ages =30;//number literal
let isApproved = true;// boolean literal
let firstName = undefined;
let selectedColor = null;

 
// The value of a variable (let) can change but the value of a constant cannot change
// if you do not need to reassign a value, use a const
// if you need to reassing your value use let

let person = {
    name :'Oluwaseun',
    age : 26
};
console.log(person) 

//dot notation 
person.name = 'john';

//bracket notation 
let selection = 'name';
person[selection] = 'mary' 
console.log(person.name)

let selectedColors = [ 'red', 'green', 'pink']
selectedColors[2] = '4'
console.log(selectedColors.length);

//performing a task
function greet(name, lastName) {
    console.log('hello ' +  name + ' ' + lastName);
}

//calculating value
function square(number){
    return number * number;
};
console.log(square(2));

greet('john', 'smith');