console.log(a) //undefined  -- hoisting -- accessing value before declaration , usage goes prior to declaration
//console.log(b) //not defined
// undefined is accidental absence of value
// null is intensional absence of value

var a = 5;
console.log(a)


// operators
//Arithematic operators
console.log(2+3,2-3,2*3,3/2,3%2,3**2)//5 -1 6 1.5 1 9
//relational operators
console.log(2 > 3, 3 < 2, 2 == '2', 2 === '2', 3 != '3', 3 !== '3', 2 >= 1, 3 <= 4);
//false false true false false true true true
//assignment operators
let x = 25;
x += 1; // x=x+1 26
x -= 1; // x=x-1  25
x *= 2; // x=x*2  50
x /= 2; //x=x/2;   25
x %= 2; //x= x%2;   1
x **= 3; // x=x power 3  1
console.log(x)
// logical operators
console.log((2>1) && (3<4)) // will be true when both are true
console.log((3 > 1) || (3 < 2)) // will be true if any one is true
console.log(!(5 > 6)) //true  because ! will reverse the boolean

//conditional operator or ternary operator
let z = (5 > 6) ? 5 : 6;
// z is 6 because condition is false
//increement and decrement operator
//unary, binary, ternary

let x2 = 25;
x++; //x=x+1; -- post increment
++x;  // pre increment
console.log(x2);

let x3 = 5;
let y3 = ++x3 + x3++;
console.log(y3) //6+6 =12
//-- is used to subtract 1 value known as decrement operator

// + is also used for unary operator of converting any data type into number
console.log(5 + '6')// '56'
console.log(5 + +'6') //5+6 = 11

// nullish coelision operator
let a3 = undefined; let b3 = 8;
let c3 = a3 ?? b3;
console.log(c3) //8 //?? is used to take a choice of two values, if first is undefined and it takes second else it takes first













































