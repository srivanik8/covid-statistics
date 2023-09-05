const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eaca5a45a7msh710d3fd17f55476p1e1c5cjsn89ad178f5c3a',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics?country=India', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		continent.innerHTML = response.continent
	})	
	.catch(err => console.error(err));

