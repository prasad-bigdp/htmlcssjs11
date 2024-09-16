const mainDiv = document.getElementById('main');
const input= document.getElementById('inp')

const fetchData = () =>
{
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=3429085f`) // fetch will return a promise
        .then((res) => res.json())// promises resolves and returns another promise for converting json
        .then((data) => displaydata(data.Search))
        .catch((err) => console.log(err))
}
document.getElementById("search").addEventListener("click", fetchData)
const displaydata = (arr) =>
{
    mainDiv.textContent = '';
    arr.forEach((ele) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImg = document.createElement('img')
        movieImg.src = ele.Poster;
        movieImg.alt = ele.Title;
        const movieTitle = document.createElement('h2')
        movieTitle.textContent = ele.Title;
        const movieYear = document.createElement('p');
        movieYear.textContent="YEAR: "+ele.Year
        movieDiv.append(movieImg, movieTitle, movieYear)
        mainDiv.append(movieDiv)
    })
}