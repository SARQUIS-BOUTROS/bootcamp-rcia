function traer(){
    fetch('https://swapi.co/api/films/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
    listar(myJson.results)
    });
}

function listar(films) {
    document.getElementById('lista').innerHTML= '';
    const cantidad = films.length;
    for (var i=0; i< cantidad ; i++){
        document.getElementById('lista').innerHTML += `
        <option value="${i}"  onclick="mostrar(value)">${films[i].title}</option>
        `
    }
}

function mostrar(i){
    cleanScreen();
    fetch('https://swapi.co/api/films/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        var peliSelect = myJson.results[i];
        document.getElementById("info").style.display = "block";
        document.getElementById("info").innerHTML = 
        'Titulo: ' + peliSelect.title + '<br>' +
        'Director: ' + peliSelect.director +'<br>' +
        'Productor: ' + peliSelect.producer + '<br>' +
        'Fecha de realizacion: ' + peliSelect.release_date;
        mostrarC(peliSelect.characters[0]);
        mostrarP(peliSelect.planets[0]);
        mostrarSS(peliSelect.starships[0]);
        mostrarV(peliSelect.vehicles[0]);
        mostrarS(peliSelect.species[0]);

    });
}


function mostrarC(charac){
    fetch(charac)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        document.getElementById('characters').style.display = "block";
        document.getElementById('character').innerHTML = 
        'Name: ' + myJson.name + '<br>'+
        'Height: ' + myJson.height + '<br>' +
        'Mass: ' + myJson.mass + '<br>' +
        'Hair color: ' + myJson.hair_color + '<br>' +
        'Skin color: ' + myJson.skin_color + '<br>' + 
        'Eye color: ' + myJson.eye_color + '<br>' +
        'Gender: ' + myJson.gender + '<br>' 
    })
}

function mostrarP(planet){
    fetch(planet)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        document.getElementById('planets').style.display = "block";
        document.getElementById('planet').innerHTML = 
        'Name: ' + myJson.name + '<br>'+
        'Rotation period: ' + myJson.rotation_period + '<br>' +
        'Orbital period: ' + myJson.orbital_period + '<br>' +
        'Diameter: ' + myJson.diameter + '<br>' +
        'Climate: ' + myJson.climate + '<br>' + 
        'Gravity: ' + myJson.gravity + '<br>' +
        'Terrain: ' + myJson.terrain + '<br>' +
        'Surface water: ' + myJson.surface_water + '<br>' 
        
    })
}

function mostrarSS(starships){
    fetch(starships)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        document.getElementById('starships').style.display = "block";
        document.getElementById('starship').innerHTML = 
        'Name: ' + myJson.name + '<br>'+
        'Model: ' + myJson.model + '<br>' +
        'Manufacturer: ' + myJson.manufacturer + '<br>' +
        'Cost in credits: ' + myJson.cost_in_credits + '<br>' +
        'Length: ' + myJson.length + '<br>' + 
        'max atmosphering speed: ' + myJson.max_atmosphering_speed + '<br>' +
        'Crew: ' + myJson.crew + '<br>' +
        'Passengers: ' + myJson.passengers + '<br>' +
        'Cargo capacity: ' + myJson.cargo_capacity + '<br>' +
        'Consumables: ' + myJson.consumables + '<br>' + 
        'Hyperdrive rating: ' + myJson.hyperdrive_rating + '<br>'+ 
        'MGLT: ' + myJson.MGLT + '<br>'+ 
        'Starship class: ' + myJson.starship_class + '<br>' 
        
    })
}


function mostrarV(vehicles){
    fetch(vehicles)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        document.getElementById('vehicles').style.display = "block";
        document.getElementById('vehicle').innerHTML = 
        'Name: ' + myJson.name + '<br>'+
        'Model: ' + myJson.model + '<br>' +
        'Manufacturer: ' + myJson.manufacturer + '<br>' +
        'Cost in credits: ' + myJson.cost_in_credits + '<br>' +
        'Length: ' + myJson.length + '<br>' + 
        'max atmosphering speed: ' + myJson.max_atmosphering_speed + '<br>' +
        'Crew: ' + myJson.crew + '<br>' +
        'Passengers: ' + myJson.passengers + '<br>' +
        'Cargo capacity: ' + myJson.cargo_capacity + '<br>' +
        'Consumables: ' + myJson.consumables + '<br>' +
        'Vehicle class: ' + myJson.vehicle_class + '<br>' 
        
    })
}

function mostrarS(species){
    fetch(species)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        document.getElementById('species').style.display = "block";
        document.getElementById('specie').innerHTML = 
        'Name: ' + myJson.name + '<br>'+
        'Classification: ' + myJson.classification + '<br>' +
        'Designation: ' + myJson.designation + '<br>' +
        'Average height: ' + myJson.average_height + '<br>' +
        'Skin colors: ' + myJson.skin_colors + '<br>' + 
        'Hair colors: ' + myJson.hair_colors + '<br>' +
        'Eye colors: ' + myJson.eye_colors + '<br>' +
        'Average lifespan: ' + myJson.average_lifespan + '<br>' +
        'Homeworld: ' + myJson.homeworld + '<br>' +
        'Language: ' + myJson.language + '<br>' 
        
    })
}


function cleanScreen(){
    document.getElementById('info').innerHTML = '';
    document.getElementById('character').innerHTML = '';
    document.getElementById('planet').innerHTML = '';
    document.getElementById('starship').innerHTML = '';
    document.getElementById('vehicle').innerHTML = '';
    document.getElementById('specie').innerHTML = '';
}