// const inputData = document.getElementById('inp');
// const mainDiv = document.getElementById('output')
// function addToDO ()
// {
// 	const todoDiv = document.createElement("div") //<div></div>
// 	todoDiv.classList.add("todo") //<div class="todo"></div>
// 	const para = document.createElement("p") //<p></p>
// 	para.textContent = inputData.value //<p>input value</p>
// 	const deleteButton = document.createElement("button")
// 	//<button></button>
// 	deleteButton.textContent = "❎" // <button></button>
// 	todoDiv.append(para, deleteButton)
// 	//<div class="todo"><p>input value</p> <button></butto</div>
// 	mainDiv.appendChild(todoDiv)
// 	//<div id="main"><div class="todo"><p>input value</p> <button></butto</div></div>
// 	inputData.value = ""// make input box empty
// }








// take input element
const inpElement = document.getElementById('inp');
const mainDiv = document.getElementById('output');
const mainDiv2 = document.getElementById("output2")

let items = []
let saveItems = []
function addToDO ()
{
	items.push(inpElement.value);	
	displayData()
}
function displayData ()
{
	mainDiv.textContent = ""
	items.forEach((ele,ind) => {
		const todoDiv = document.createElement("div")
		todoDiv.classList.add("todo")
		const para = document.createElement("p")
		para.textContent = ele
		const saveButton = document.createElement('button');
		saveButton.textContent="save"
		const removeButton = document.createElement("button")
		removeButton.textContent = "delete"
		removeButton.
			addEventListener('click', () => removeToDO(ind))
		saveButton.addEventListener('click',()=>savetoDO(ele))
		todoDiv.append(para,saveButton, removeButton)
		mainDiv.appendChild(todoDiv)
		inpElement.textContent=''
	})
	
}
function displayData2() {
	mainDiv2.textContent = ""
	saveItems.forEach((ele, ind) => {
		const todoDiv = document.createElement("div")
		todoDiv.classList.add("todo")
		const para = document.createElement("p")
		para.textContent = ele
		const saveButton = document.createElement("button")
		saveButton.textContent = "save"
		const removeButton = document.createElement("button")
		removeButton.textContent = "delete"
		removeButton.addEventListener("click", () => removeToDO(ind))
		saveButton.addEventListener("click", () => savetoDO(ele))
		todoDiv.append(para, saveButton, removeButton)
		mainDiv2.appendChild(todoDiv)
		inpElement.textContent = ""
	})
}
function savetoDO (ele)
{
	saveItems.push(ele)
	displayData2()
}
function removeToDO (i)
{
	items.splice(i, 1);
	displayData()
}










