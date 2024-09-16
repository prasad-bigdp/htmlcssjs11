console.log("this is external js");
var a = 25;
var a = 35; // redeclare is possible with var
a = 90; // reassign is possible with var
let b = 35;
//let b = 45; // redeclare is not possible with let or const
b = 45; //reassign is possible with let also
const c = 45;
//c = 55; // reassign is also not possible with const
console.log(a)
console.log("hello world");
/* this program explains external javascript */

/* task1: create a html and add external js and print hello world in console and also use multi line comment in js */

// var is function scoped variable and let and const are block scoped variables
function something ()
{
  
    if (true)
    {
        var x = 55;  
        let y = 25;
        const z = 23;
     }
   console.log(x,y)
}
something()



