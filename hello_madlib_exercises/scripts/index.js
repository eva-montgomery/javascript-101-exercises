// Hello, you!
// Write a function hello which given a name, says hello to the name. 
// Use the following template:
// function hello(name) {
//     // put your code here
//   }
//   hello('Mustache');
//   Make the above program print:
//   Hello, Mustache!

function hello(name) {
    return(`Hello, ${name}`);
 }
 console.log(hello('Mustache'));

// Hello, you! Part 2

// Modify your hello program such that if no name is given: hello(), 
// it will print 
// "Hello, world!", otherwise it behaves the same as previously.

function hello(name = `World!`) {
    return(`Hello, ${name}`);
}
console.log(hello('Mustache'));
console.log(hello());

// Madlib
// Write a madlib function, which is given a name and a subject. 
// It will return(not print) a new string: (name)'s favorite subject 
// in school is (subject).

// Example:
// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'

function madlib(name, subject) {
    return(`${name}'s favorite subject in school is ${subject}`);
}
console.log(madlib(`Anushka`, `Art`)); 