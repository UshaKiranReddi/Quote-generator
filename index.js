const btnEL = document.getElementById("btn");
 const quoteEL = document.getElementById("quote")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3019724demshcd94adec0194a11p14755ejsneda95b2cfbf1',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
function getQoute () {

    quoteEL.innerText = "Updating...";

    btnEL.Disabled = true;
    btnEL.innerText = "Loading";

    fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
	.then(response => response.json())
	.then(response => document.getElementById("quote").innerText = response.content)
	.catch(err => console.error(err)); 

    btnEL.Disabled = false;
    btnEL.innerText = "GIVE THE QUOTE"; 
}
btnEL.addEventListener("click", getQoute);