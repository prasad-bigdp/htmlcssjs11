let k;
console.log(typeof k)
let a = 25;
console.log(a, typeof a)
a = "prasad"
console.log(a, typeof a)

let x = 25.85855858;
console.log(typeof x)
console.log(x.toFixed(3)) // 25.859
console.log(x.toPrecision(4)) //25.86
let y = 22;
console.log(y.toString(2)) // it will convert y to binary
// JS also Have Math Methods
console.log(Math.sqrt(16)) //4
console.log(Math.cbrt(27)) //3
console.log(Math.pow(2,3), 2**3)
console.log(Math.floor(8.6)) //8
console.log(Math.ceil(8.1)) //9
console.log(Math.round(8.6)) //9
console.log(Math.max(8, 5, 4, 3, 7)) //8
console.log(Math.min(5, 1, 4)) //1
console.log(Math.round(Math.random() * 10000)) // it will give random value between 0 and 1 // 0.12225585588*10000 ==>1222.55585








    // strings
let str = "JS is so easy"
console.log(str, typeof str)
let str1 = "time is 12 o' clock"
let str2 = 'the gandhi said "good night"'
// backtick is used for strings. it is called template literal. it is used to assign dynamic values inside the string without breaking it
let p = 5, q = 10;
console.log(" the sum of " + p + " and " + q + " is " + (p + q));
console.log(`the sum of ${p} and ${q} is ${p+q}`)
let pagename = "fruits";
let url = `https://www.amazon.in/${pagename}`

// take cost=10, items=5; print in console total value without breaking string
let cost = 10, items = 5;
console.log(` the total cost is ${cost * items}`)

// strings have some default functions
// Every string is nothing but an array of characters
let s="prasad"
console.log(s[0] + s[2])
console.log(s.length) //6 - no.of characters
console.log(s.concat(" raj")) //prasad raj
console.log(s.toUpperCase(),s) // PRASAD
// strings are immutable- u cannot change
console.log(s.toLowerCase()) //prasad
console.log(s.startsWith('pr')) //true
let na = "adha sharma"
console.log(na.endsWith('sharma')) //true
console.log(s.indexOf('a')) // first occurence value index
console.log(s.lastIndexOf('a')) //4
console.log(s.charAt('0')) //p
console.log("    prasad  ".trim()) // remove space from last and first
console.log("js is so easy".split("")) // split is used to split the string based on delimiter and return an array
console.log(s.replaceAll('a', 'p'))
console.log("prasad".slice(2))//asad
console.log("prasad".slice(1, 5)) //rasa

// boolean
let isGoodBoy = true
console.log(1 + isGoodBoy)

// undefined and null








let a1 = 20, b1 = 20;
console.log(a1 == b1) //true
let arr1 = [5, 6], brr1 = [5, 6]
console.log(arr1 == brr1)//false
let str11 = "prasad"
str11.toUpperCase()
console.log(str11)
let arr2 = [5, 6]
arr2.push(5);
console.log(arr2)






















