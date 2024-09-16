const mainDiv = document.getElementById('main');
async function fetchData ()
{
    const res = await fetch("http://localhost:3000/movies")
    const data = await res.json()
    displayData(data)
}
fetchData()
const titleInput = document.getElementById('title');
const yearInput= document.getElementById('year')
document.getElementById("create").addEventListener('click',addData)
async function addData ()
{
    const res = await fetch("http://localhost:3000/movies", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            Title: titleInput.value,
            Year:yearInput.value
        })
    }) 
    console.log(res)
}
function displayData (data)
{
    data.forEach((m,i) =>
    {
        const movie = document.createElement('div');
        movie.classList.add('movie')
        const name = document.createElement('h2');
        name.textContent = m.Title;
        const year = document.createElement('p');
        year.textContent = "YEAR: " + m.Year
        const updateButton = document.createElement("button")
        updateButton.textContent = "update"
        updateButton.addEventListener('click',()=> {
            titleInput.value = m.Title;
            yearInput.value = m.Year;
            document.getElementById('create').style.display = "none";
            document.getElementById('update').style.display='block'
            document.getElementById('update').addEventListener('click', () =>
            {
                fetch(`http://localhost:3000/movies/${m.id}`, {
									method: "PUT",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										Title: titleInput.value,
										Year: yearInput.value,
									}),
								})
                
            })
        })
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', () =>
        {
            fetch(`http://localhost:3000/movies/${m.id}`, {
                method:'DELETE'
            })
            .then((res)=>console.log(res))
        })
        movie.append(name, year,updateButton,deleteButton);
        mainDiv.appendChild(movie)
    })
}