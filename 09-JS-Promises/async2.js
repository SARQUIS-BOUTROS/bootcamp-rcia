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

async function getInfoCall(){
	setTimeout(()=>{getInfo()},0)
}

async function getInfo(){

	const charAcceptedKeys = ["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];
	const planetAcceptedKeys = ["name","rotation_period","","orbital_period","diameter","climate","gravity","terrain","surface_water"];
	const starshipAcceptedKeys = ["name","model","","manufacturer","cost_in_credits","length","max_atmosphering_speed","crew","passengers","cargo_capacity","consumables","hyperdrive_rating","MGLT","starship_class"];
	const vehicleAcceptedKeys = ["name","model","","manufacturer","cost_in_credits","length","max_atmosphering_speed","crew","passengers","cargo_capacity","consumables","vehicle_class"];
	const specieAcceptedKeys = ["name","classification","designation","average_height","skin_colors","hair_colors","eye_colors","average_lifespan","language"];

	clearLists();

	value = document.getElementById("select").value;

	film = await fetch("https://swapi.co/api/films/")
			.then((resp)=>resp.json())
			.then(async function(data){
				return(data.results[value]);
			});

clearLists();

printInfo(film.characters[0],charAcceptedKeys,charList);
printInfo(film.planets[0],planetAcceptedKeys,planetList);
printInfo(film.starships[0],starshipAcceptedKeys,starshipList);
printInfo(film.vehicles[0],vehicleAcceptedKeys,vehicleList);
printInfo(film.species[0],specieAcceptedKeys,specieList);


}

function getMoreInfo(item,acceptedKeys){
	result = fetch(item)
								.then((resp)=>resp.json())
								.then(function(data){
									let info = data;
									let listItems = [];
									for (key in info) {
										if(acceptedKeys.includes(key)){
											let infoElem = document.createElement("LI");	
											infoElem.innerHTML = key+": "+info[key];
											listItems.push(infoElem);
										};
										
									};
									return(listItems);
				
								});
		return(result);
}

async function printInfo(info,acceptedKeys,list){
	listInfo = await getMoreInfo(info,acceptedKeys);
	for(item in listInfo){list.appendChild(listInfo[item])};
}

function clearLists(){
	charList = document.getElementById("charList");
	charList.innerHTML = "<li><strong>Character 1</strong></li>";

	planetList = document.getElementById("planetList");
	planetList.innerHTML = "<li><strong>Planet 1</strong></li>";

	starshipList = document.getElementById("starshipList");
	starshipList.innerHTML = "<li><strong>Starship 1</strong></li>";

	vehicleList = document.getElementById("vehicleList");
	vehicleList.innerHTML = "<li><strong>Vehicle 1</strong></li>";

	specieList = document.getElementById("specieList");
	specieList.innerHTML = "<li><strong>Specie 1</strong></li>";
}

/* ---Problemas al correr rapidamente la misma funcion---
select.value = 1;
getInfoCall();
select.value = 2;
getInfoCall();
select.value = 3;
getInfoCall();
*/