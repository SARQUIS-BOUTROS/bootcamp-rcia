window.onload = function() {
	select = document.getElementById("select");

  fetch("https://swapi.co/api/films/")
  .then((resp)=>resp.json())
  .then(function(data){
  	
  	let films = data.results;

  	return films.map(function(film,index) {
  		let option = film.title;
  		let optElem = document.createElement("OPTION");
  		optElem.innerHTML = option;
  		optElem.value = index;
  		select.appendChild(optElem);
  	})
  })
};

function getInfoCall(){
	setTimeout(()=>{getInfo()})
}

async function getInfo(){

	charList = document.getElementById("charList");
	charList.innerHTML = await "<li><strong>Character 1</strong></li>";

	planetList = document.getElementById("planetList");
	planetList.innerHTML = await "<li><strong>Planet 1</strong></li>";

	starshipList = document.getElementById("starshipList");
	starshipList.innerHTML = await "<li><strong>Starship 1</strong></li>";

	vehicleList = document.getElementById("vehicleList");
	vehicleList.innerHTML = await "<li><strong>Vehicle 1</strong></li>";

	specieList = document.getElementById("specieList");
	specieList.innerHTML = await "<li><strong>Specie 1</strong></li>";

	value = document.getElementById("select").value;

	films = await fetch("https://swapi.co/api/films/")
			.then((resp)=>resp.json())
			.then(async function(data){
				let film = data.results[value];
				
				let character1 = film.characters[0];

				var list = document.getElementById("charList");

				acceptedKeys = ["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];

				character =  await fetch(character1)
								.then((resp)=>resp.json())
								.then(function(data){
									let charInfo = data;
									console.log(data);
									for (key in charInfo) {
										if(acceptedKeys.includes(key)){
											let infoElem = document.createElement("LI");	
											infoElem.innerHTML = key+": "+charInfo[key];
											charList.appendChild(infoElem);
										};
										
									};

				
								});

				let planet1 = film.planets[0];

				list = document.getElementById("planetList");

				acceptedKeys = ["name","rotation_period","","orbital_period","diameter","climate","gravity","terrain","surface_water"];

				planet = await fetch(planet1)
								.then((resp)=>resp.json())
								.then(function(data){
									let info = data;
									console.log(data);
									for (key in info) {
										if(acceptedKeys.includes(key)){
											let elem = document.createElement("LI");	
											elem.innerHTML = key+": "+info[key];
											list.appendChild(elem);
										};
										
									};

				
								})
			

				let starship1 = film.starships[0];

				list = document.getElementById("starshipList");

				acceptedKeys = ["name","model","","manufacturer","cost_in_credits","length","max_atmosphering_speed","crew","passengers","cargo_capacity","consumables","hyperdrive_rating","MGLT","starship_class"];

				starship = await fetch(starship1)
								.then((resp)=>resp.json())
								.then(function(data){
									let info = data;
									console.log(data);
									for (key in info) {
										if(acceptedKeys.includes(key)){
											let elem = document.createElement("LI");	
											elem.innerHTML = key+": "+info[key];
											list.appendChild(elem);
										};
										
									};

				
								})
			
				let vehicle1 = film.vehicles[0];

				list = document.getElementById("vehicleList");

				acceptedKeys = ["name","model","","manufacturer","cost_in_credits","length","max_atmosphering_speed","crew","passengers","cargo_capacity","consumables","vehicle_class"];

				vehicle = await fetch(vehicle1)
								.then((resp)=>resp.json())
								.then(function(data){
									let info = data;
									console.log(data);
									for (key in info) {
										if(acceptedKeys.includes(key)){
											let elem = document.createElement("LI");	
											elem.innerHTML = key+": "+info[key];
											list.appendChild(elem);
										};
										
									};

				
								})

			
				let specie1 = film.species[0];

				list = document.getElementById("specieList");

				acceptedKeys = ["name","classification","designation","average_height","skin_colors","hair_colors","eye_colors","average_lifespan","language"];

				specie = await fetch(specie1)
								.then((resp)=>resp.json())
								.then(function(data){
									let info = data;
									console.log(data);
									for (key in info) {
										if(acceptedKeys.includes(key)){
											let elem = document.createElement("LI");	
											elem.innerHTML = key+": "+info[key];
											list.appendChild(elem);
											
										};
									
									};

								})
				
			});


}