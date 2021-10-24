const name = "Danilunchas";
const age = 30;

// +:
const mergingWithAPlus = "Hello, I am " + name + " and I am " + age + " years old.";
console.log(mergingWithAPlus);

// BackTicks:
const mergingWithBackTicks= `Hello, I am ${name} and I am ${age} years old.`;
console.log(mergingWithBackTicks);

// Simple way:
const simpleWay = "creating stuff";
console.log("I love " + simpleWay + ".");

// Merging using Methods:
const part1 = "Hello, I am Danilunchas ";
const part2 = "and I am 30 years old.";

const mergingWithMethods = part1.concat(part2);
console.log(mergingWithMethods);