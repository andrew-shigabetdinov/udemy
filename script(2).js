let string = 'some test string';

// 1-е задание
var stringOne = string[0] + string[string.length-1];
console.log(stringOne);

// 2-е задание
var stringTwo = stringOne.toUpperCase();
console.log(stringTwo);

// 3-е задание
var stringThree = string.indexOf("string");
console.log(stringThree);

// 4-е задание
var stringFour = string.indexOf(" ", string.indexOf(" ")+1);
console.log(stringFour);

// 5-е задание
var stringFive = string.slice(5, 5+4);
console.log(stringFive);

// 6-е задание
var stringSix = string.slice(5, 9);
console.log(stringSix);

// 7-е задание
var stringSeven = string.slice(0, -6);
console.log(stringSeven);

// 8-е задание
var a=20, b=16;
var stringEight = String(a) + String(b);
console.log(stringEight);