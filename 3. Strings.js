//Different types of quotation marks:
let simpleQuotationMarks = '¡Hello, you! "I am inside simple quotation marks" \'I still can put simple quotation marks using these inverted bars\'.';

let doubleQuotationMarks = "¡Hello, you! 'I am inside double quotations marks' \"I can still put double quotation marks using these inverted bars\".";

let invertedQuotationMarks = `Hello, I am using backticks`;

console.log(simpleQuotationMarks, doubleQuotationMarks, invertedQuotationMarks);

//WithMethods, mode on:
let withMethods = "Here, using methods";
//CharAt
console.log('Using Methods - Part 1: ', withMethods.charAt(7));
//Brackets
console.log('Using Methods - Part 2: ', withMethods[9]);
//New variable
let anotherVariable = withMethods.charAt(3);
console.log('Another variable: ', anotherVariable);