const mainDiv = document.getElementById('main');
// function fetchData ()
// {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }
async function fetchData ()
{
    try
    {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json()
        console.log(data);
        displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()
function displayData (data)
{
    const setup = document.createElement('h1')
    setup.textContent = data.setup;
    const punchLine = document.createElement('p');
    punchLine.textContent = data.punchline;
    mainDiv.append(setup,punchLine)
}