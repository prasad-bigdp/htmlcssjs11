let cartItems = JSON.parse(localStorage.getItem("cartItems"))
console.log(cartItems)
const mainDiv= document.getElementById('cartMain')
function displayData ()
{
    cartItems.forEach((item,ind) =>
    {
        const div = document.createElement('div')
        div.classList.add('item');
        const image = document.createElement('img');
        image.src = item.thumbnail;
        image.alt = item.title;
        const title = document.createElement('h3');
        title.textContent = item.title;
        const price = document.createElement('p');
        price.textContent = "Price: ₹" + item.price;
        const removeButtton = document.createElement('button');
        removeButtton.textContent = '❎'
        removeButtton.addEventListener('click', () => removeCart(ind));
        div.append(image, title, price,removeButtton);
        mainDiv.appendChild(div)
    })
}
displayData()