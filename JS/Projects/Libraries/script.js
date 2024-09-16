$('#btn1').click(function ()
{
    // $.ajax({
    //     type: "GET",
    //     url: "https://fakestoreapi.com/products",
    //     success: function (response) {
    //         console.log("sucess"+response)
    //     }
    // });
    $('#jqr').slideToggle(5000)
})
//$ means document.query selector

const ctx = document.getElementById("myChart")

new Chart(ctx, {
    height:300,
	type: "doughnut",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
})
var typed = new Typed(".prasad", {
	strings: ["Developer.", "good Boy.", "Trainer"],
	typeSpeed: 30,
	loop: true,
	loopCount: Infinity
})