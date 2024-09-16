const mainDiv = document.getElementById('main');
const imageURL = document.getElementById('url');
const textName = document.getElementById('name');
function generateId ()
{
    const image = document.createElement('img');
    image.src = imageURL.value;
    image.alt = textName.value;
    image.height = "200";
    const myName = document.createElement('p');
    myName.textContent = textName.value
    mainDiv.append(image, myName);
    imageURL.value = ''
    textName.value=''

}