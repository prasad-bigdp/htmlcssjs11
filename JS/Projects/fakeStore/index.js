const mainDiv = document.getElementById("main");
function getData ()
{
    fetch("https://fakestoreapi.com/products")// fetch the URL for data and returns promise
        .then((r) => r.json())//if promise resolve response comes and returns another promise for res.json()
        .then((data)=>displayData(data))// if res.json() promise resolves call displaydata and pass the data
        .catch((err)=>console.log(err))// if any of above promises rejected it works 
    // rest api -- json 
}
getData()
function displayData (arr)
{
    console.log(arr);
    mainDiv.textContent = '';
    arr.forEach((ele) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('product')
        const proImage = document.createElement('img');
        proImage.src = ele.image
        proImage.alt = ele.title
        proImage.height = "200"
        const proTitle = document.createElement('h2');
        proTitle.textContent= ele.title
        const proPrice = document.createElement('p')
        proPrice.textContent = "₹" + ele.price;
        proDiv.append(proImage, proTitle, proPrice);
        mainDiv.appendChild(proDiv)
    })
}