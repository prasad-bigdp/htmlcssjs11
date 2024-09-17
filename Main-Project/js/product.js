const productDiv = document.getElementById("product")
// probelm 1: get pid from url
//2. get product details based on id
//probelm 1: prasad.com/products?pid=4&cid=3&rid=9
const leftDiv = document.getElementById('leftDiv');
const rightDiv = document.getElementById("rightDiv")

const urlData = new URLSearchParams(window.location.search)
const pid = urlData.get('pid')
function fetchData (id)
{
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => displayData(data));
}
fetchData(pid)
const displayData = (data) =>
{
    const image = document.createElement('img');
    image.src = data.thumbnail;
    image.alt = data.title;
    leftDiv.appendChild(image);
    const title = document.createElement('h2');
    title.textContent = data.title;
    const desc = document.createElement('p');
    desc.textContent = data.description;
    const price = document.createElement('p');
    price.textContent = "Price: ₹" + data.price;
    const addCartButton = document.createElement('button');
    addCartButton.textContent = "Add to cart";
    addCartButton.addEventListener("click", () => addCart(data))
    rightDiv.append(title,desc,price,addCartButton)
}






