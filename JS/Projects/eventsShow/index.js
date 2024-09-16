function show ()
{
    alert("i'm clicked")
}
// event handlers were mentioned in HTML but we need to see HTML and JS 
// to understand it. we can also trigger an event in JS
//event listners
const myDiv = document.getElementById('btn1')
myDiv.addEventListener('click', show);
// types of events
// window events, keyboards events,mouse events,
const myDiv2 = document.getElementById('btn2')
myDiv2.addEventListener('mouseover', function ()
{
    myDiv2.style.background='green'
})
myDiv2.addEventListener('mouseleave', function () {
	myDiv2.style.background = "red"
})
// event propagation

document.getElementById('btn').addEventListener('click',
    () => alert("btn clicked"),true)
document.getElementById("btn3").addEventListener("click", () => alert("btn3 clicked"),true)
 document.getElementById("btn4")
    .addEventListener("click", () => alert("btn4 clicked"),true)
document.getElementById("btn5")
			.addEventListener("click", () => alert("btn5 clicked"),true)
                            
// always JS events propagate from child to parent by default which is called bubbling
// to reverse it , we use thirs parameter as true in event listner
// then control move parent to child which is called capturing

// create you favourite books,receipes,movies or any collection DOM using eventListners
document.addEventListener('keypress', function (event)
{
    console.log("you clicked"+event.key)
})
document.getElementById('inp').addEventListener('input',
    (event) =>
{
    console.log(event.target.value)
})
// some library with search funcction


