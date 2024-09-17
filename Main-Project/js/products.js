const productsDiv = document.getElementById('products');
const fetchData = () =>
{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data)=>displayData(data.products))
}
fetchData();
const displayData = (arr) =>
{
    arr.forEach((pro) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('card','p-5');
        const productImage = document.createElement('img');
        productImage.src = pro.thumbnail;
        productImage.alt= pro.title
        const productTitle = document.createElement('h2');
        productTitle.textContent = pro.title;
        const productLink = document.createElement('a');
        productLink.href = `./product.html?pid=${pro.id}`
        productLink.append(productTitle)
        const productPrice = document.createElement('p');
        productPrice.textContent = "Price: ₹" + pro.price;
        const productAddCart = document.createElement('button');
        productAddCart.textContent = "Add To Cart";
        productAddCart.addEventListener('click',()=>addCart(pro))
        productDiv.append(productImage, productLink, productPrice,productAddCart);
        productsDiv.appendChild(productDiv)
    })   
}