window.onload = () => {
fetch('https://swapi.co/api/films/?format=json').then(response => {
  return response.json();
}).then(async data => {
  for (i = 0; i < await data.results.length; i++) { 
    document.write('<button onclick="getMoreInfo()" class='+'title'+i+'>'+await data.results[i].title+'</button>');
  }
    document.write('<h3 class="info"></h3>')
    document.write('<h3 class="character"></h3>')
    document.write('<h3 class="specie"></h3>')
    document.write('<h3 class="planet"></h3>')
})}

var characterJson = [];
var specieJson = [];
var planetJson = [];

function getMoreInfo() {
  cleanScreen();
  const { target } = event;
  fetch('https://swapi.co/api/films/?format=json').then(response => {
  return response.json();
}).then(async data => {
  for (i = 0; i < await data.results.length; i++) {
    if (target.classList.contains('title'+i)){
    document.querySelector('.info').innerHTML = await(
      'Titulo: ' + data.results[i].title + '<br>' +
      'Nro de Episodio en la Saga: ' + data.results[i].episode_id + '<br>' + 
      'Fecha de Emision: ' + data.results[i].release_date + '<br>' + 
      'Director: ' + data.results[i].director + '<br>' +
      'Productores: ' + data.results[i].producer);
      
      characterJson = await data.results[i].characters[0]+'?format=json';
      specieJson = await data.results[i].species[0]+'?format=json';
      planetJson = await data.results[i].planets[0]+'?format=json';
  }}}).then(function(){
  
  fetch(characterJson).then(response => {
      return response.json();
      }).then(async data => {
    document.querySelector('.character').innerHTML = await(
      'Primer Personaje Listado: ' + data.name + '<br>' +
      'Año de Nacimiento: ' + data.birth_year + '<br>' + 
      'Color de Ojos: ' + data.eye_color + '<br>' + 
      'Color de Cabello: ' + data.hair_color + '<br>' +
      'Altura: ' + data.height );
  })
  
  fetch(specieJson).then(response => {
      return response.json();
      }).then(async data => {
    document.querySelector('.specie').innerHTML = await(
      'Primer Especie Listada: ' + data.name + '<br>' +
      'Clasificacion: ' + data.classification + '<br>' + 
      'Designacion: ' + data.designation + '<br>' + 
      'Color de Piel: ' + data.skin_colors + '<br>' +
      'Altura Promedio: ' + data.average_height );
  })
  
  fetch(planetJson).then(response => {
      return response.json();
      }).then(async data => {
    document.querySelector('.planet').innerHTML = await(
      'Primer Planeta Listado: ' + data.name + '<br>' +
      'Periodo Rotacional: ' + data.rotation_period + '<br>' + 
      'Periodo Orbitacional: ' + data.orbital_period + '<br>' + 
      'Diametro: ' + data.diameter + '<br>' +
      'Clima: ' + data.climate );
  })
})}

function cleanScreen(){
    document.querySelector('.info').innerHTML = '';
    document.querySelector('.character').innerHTML = '';
    document.querySelector('.specie').innerHTML = '';
    document.querySelector('.planet').innerHTML = '';
}