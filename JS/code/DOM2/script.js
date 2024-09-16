const myDiv = document.getElementById('main')
let c = 0;
function createData ()
{
	const para = document.createElement("p") //<p></p>
    para.textContent = ++c; //<p>1</p>
    myDiv.appendChild(para)
    // <div id="main"><p>hello world</p></div>
}
