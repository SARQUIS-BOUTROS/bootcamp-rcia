window.onload = function() {
	select = document.getElementById("select");

  fetch("https://swapi.co/api/films/")
  .then((resp)=>resp.json())
  .then(function(data){
  	
  	let films = data.results;
  	return films.map(function(film) {
  		let option = film.title;
  		let optElem = document.createElement("OPTION");
  		optElem.innerHTML = option;
  		select.appendChild(optElem);
  	})
  })
};

getInfo(){
	film = document.getElementById("select").value;
	console.log(film);
}