const books = [
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
	{
		author: "Prasad",
		country: "INDIA",
		imageLink:
			"https://m.media-amazon.com/images/I/614txcnPsFL._AC_UF1000,1000_QL80_.jpg",
		language: "English",
		link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
		pages: 784,
		title: "PRASAD BOOK",
		year: 1836,
	},
]
const mainDiv = document.getElementById('main')
function displayData ()
{
    books.forEach((ele) =>
    {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book')
        const image = document.createElement('img');
        image.src = ele.imageLink;
        image.alt = ele.title;
        const title = document.createElement('h2');
        title.textContent = ele.title;
        const authorName = document.createElement('p');
        authorName.textContent = "Author: " + ele.author;
        const link = document.createElement('a');
        link.textContent="read it now"
        link.href = ele.link;
        link.target = "_blank";
        bookDiv.append(image, title, authorName, link);
        mainDiv.appendChild(bookDiv)
    })
}
displayData()