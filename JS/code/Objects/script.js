let obj = {
    username: "Prasad",
    age: 55,
    email: 'a@a.com',
    fun: function ()
    {
        console.log(this.username)
    }
}
// this --->current calling object
// whole browser/global execution content maintained by an object window
console.log(obj.username, obj['username'])
obj.fun();

function fun2 ()
{
    console.log(this) // window object
}
window.fun2()

let obj2 = {
    un: "rajesh",
    salary: 50000,  
}
function display(a,b)
    {
        console.log(this.un,this.salary,a+b)
    }
//obj2.display()
// i want to call one function for an object even though that function is not belong to that object
// to achieve this we have three ways, call,apply,bind
display.call(obj2, "raj", "prasad") // rajesh 50000 rajprasad
display.apply(obj2,["raj","prasad"])

let x= display.bind(obj2)


x("raj","prasad")

// map, filter,reduce
//rest,spread
//call,apply,bind


// window is browser object --  document,fetch,console,timers,alert,confirm
//user location
window.navigator.geolocation.getCurrentPosition((pos) =>
{
    document.getElementById("main").textContent = `The latitude is ${pos.coords.latitude}, ${pos.coords.longitude}`    
})
const vd= document.getElementById('vd')
// users video/audio
document.getElementById("btn").addEventListener("click", async function  () {

const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true ,audio:true});
vd.srcObject = mediaStream;

})


// window.navigator.mediaDevices
// 	.getUserMedia({ video: true, audio: true })
// 	.then((ob) => {
// 		console.log(ob)
// 		console.log(vd)
// 		document.getElementById("vd").srcObject = ob
// 		console.log(ob)
// 	})


























