// // Asynchronous fns will usually take some time to complete. usually browsers will not show them, instead it waits until call stack is empty
// // Timers: there sre 2 timers in browser
// // setTimeout(//callback finally,'time in seconds')
// setTimeout(() =>
// {
//     console.log("HUIIIIIIIII")
// }, 5000)
// setInterval(() => {
// 	console.log("HUIIIIIIIII")
// }, 5000)


// setInterval(() =>
// {
//     const dt = new Date();
// 	//setinterval will print it evry 5000ms
//     document.getElementById('count').textContent =
//         dt.toLocaleTimeString();
// }, 1000)

// // Timeout will take a callback function and exectes it only when time is over





console.log("hello world");
setTimeout(() =>
{
    console.log("bye bye")
},0)
for (let i = 0;i < 1000; i++)
{
    console.log("good afternoon")
}









