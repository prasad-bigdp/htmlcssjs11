// if block

//simple if
let a = 25;
if (a > 20)
{
    console.log("value is greater than 20")
}

// if else
// write a function to checck even or odd
function evenOdd (val)
{
    if (val % 2 == 0)
    {
        console.log(`${val} is even`)
    }
    else
    {
        console.log(`${val} is odd`)
        }
}
evenOdd(15)

// WAF to check whether eligible to vote or not ny passing age as parameter
function voteEligibility (val)
{
    if (val >= 18)
        console.log("eligible")
    else
        console.log("not eligible")
}
// you can also keep if inside if , called nested if
// if you have to check multiple conditions , u can if else if
function positiveOrNegitive (num)
{
    if (num > 0)
        console.log("positive")
    else if (num < 0)
        console.log("negitive")
    else console.log("number is zero. neighther positive nor negitive")
}
positiveOrNegitive(5);

// switch is used to control the control flow when multiple options are available
function userRole (val)
{
    switch (val) {
			case "admin":
				console.log("i'm admin")
				break
			case "Teacher":
				console.log("i'm Teacher")
				break
           case "Student":
            console.log("i'm student")
            break;
           default: console.log("please enter proper role")
		}
}
userRole("admin")



// Loops -- Loops are used to iterate certain statements
// every loops will have three statements -- initalization, condition, updation
// basically there are two types of loops - Entry control, Exit Control
// Entry control loops checks the condition at the starting of loop eg: while,for
// Exit Control loops check the condition at the end of loop eg: dowhile

// while
let i1 = 0;  // initialization
while (i1 <= 10) // condition
{
    console.log(i1);
    i1++;  // updation
}

// do while
let i2 = 0;
do
{
    console.log(i2);
    i2++;  // updation
} while (i2 <= 10);

// for loop
let arr = [5, 6, 7, 8];
// standard for loop
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
// for... of ... used to iterate array values
for (let i of arr)
{
    console.log(i)
}
// for..in can be used to iterate array indexes.. usually we use it for object keys
for (let i in arr)
{
    console.log(i)
}
// forEach













































