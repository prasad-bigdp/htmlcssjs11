function fetchData ()
{
    axios.get("http://localhost:3000/movies")
    .then((res)=>displayData(res.data))
}
fetchData()
function displayData (arr)
{
    arr.forEach((m) =>
    {
        $('#main').append(`<h2>${m.Title}</h2>`)
        $('#main').append(`<p>Year:${m.Year}</p>`)
        $('#main').append(`<button id="btn">delete</button>`)
        $("#btn").click(function ()
        {
            console.log(id);
					axios.delete(`http://localhost:3000/movies/${m.id}`)
				})
    })
    
}
