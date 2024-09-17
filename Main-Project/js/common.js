let cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []
let c = localStorage.getItem('cartCount') ?? 0;
    document.getElementById("count").textContent = c

function addCart (obj)
{
    // browser can store values localStorage vs sessionStorage
    cartItems.push(obj)
    c++;
    document.getElementById('count').textContent = c;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('cartCount',c)
    console.log(localStorage)
}
function removeCart (ind)
{

}