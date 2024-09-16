const para1 = document.getElementById('para1');
const para2= document.getElementById('para2')
function changeText ()
{
    para1.textContent = "Bye World"
    // you can also use innerText
}
function changeElement ()
{
    para2.innerHTML = `<img src="https://m.media-amazon.com/images/I/51tKIR7GWYL._AC_UF894,1000_QL80_.jpg" alt="shinchan" height="100"/>`
}
const inputElement = document.getElementById('inp')
function checkValue ()
{
    if (inputElement.value.length < 6)
    {
        alert("please enter minimum six character");
        inputElement.value= ""
    }
}
const secretDiv = document.getElementById('secret');
function showSecret ()
{
    secretDiv.classList.toggle('hide')
}
function changeColor ()
{
    const randomColor = "#" + Math.round(Math.random() * 10000000).toString(16)
    document.body.style.backgroundColor='#b9c585'
}






