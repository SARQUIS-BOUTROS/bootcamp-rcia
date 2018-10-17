//https://codepen.io/gemanepa/pen/ZqrVYv

// ARRAY 1
document.write('<h1>Array 1</h1>');

const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]


// Part 1 - Find all users older than 24
let array1part1 = texasss.filter(part1 => part1.age > 24)
document.write('<p>Find all users older than 24: ');
for (i = 0; i < array1part1.length; i++) { 
    document.write('<span>'+array1part1[i].name+'('+array1part1[i].age+')'+' </span>');
  }
document.write('</p>');

// Part 2 - Find the total age of all users
let array1part2 = texasss.reduce((sum, part2) => sum + part2.age, 0)
document.write('<p>Find the total age of all users: <span>'+array1part2+'</span></p>');


// Part 3 - List all female coders
let array1part3 = texasss.filter(part3 => part3.gender == 'f')
document.write('<p>List all female coders: ');
for (i = 0; i < array1part3.length; i++) { 
    document.write('<span>'+array1part3[i].name+' </span>');
  }
document.write('</p>');



// ARRAY 2
document.write('<h1>Array 2</h1>');

const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder:true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder:false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder:true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder:true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder:false,
    gender: 'm',
    us: true,
  },
]


// Part 1 - List all users in US in ascending order
let array2part1 = newieyork.filter(p1 => p1.us == true)
document.write('<p>List all users in US in ascending order: ');
for (i = 0; i < array2part1.length; i++) { 
    document.write('<span>'+array2part1[i].name+' </span>');
  }
document.write('</p>');


// Part 2 - Sort all users by age
let array2part2 = newieyork.sort(function(a, b){return b.age-a.age})
document.write('<p>Sort all users by age: ');
for (i = 0; i < array2part2.length; i++) { 
 document.write('<span>'+array2part2[i].name+'('+array2part2[i].age+')'+' </span>');
  }
document.write('</p>');


// Part 3 - List all female coders
let array2part3 = newieyork.filter(part3 => part3.gender == 'f')
document.write('<p>List all female coders: ');
for (i = 0; i < array2part3.length; i++) { 
    document.write('<span>'+array2part3[i].name+' </span>');
  }
document.write('</p>');


// ARRAY 3
document.write('<h1>Array 3</h1>');

const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder:false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder:true,
    gender:'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder:false,
    gender: 'm',
  },
]

// Part 1 - Find the total age of male coders under 25
let array3part1 = vegzas.filter(part1 => part1.age < 25).reduce((sum, part2) => sum + part2.age, 0)
document.write('<p>Find the total age of male coders under 25: '+array3part1+'</p>');


// Part 2 - List all male coders over 30
let array3part2 = vegzas.filter(part1 => part1.age > 30 && part1.gender == 'm')
document.write('<p>List all male coders over 30: ');
for (i = 0; i < array3part2.length; i++) {  document.write('<span>'+array3part2[i].name+'('+array3part2[i].age+')'+' </span>');
  }
document.write('</p>');


// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
let array3part3 = texasss.reduce((sum, part1) => sum + part1.age, 0) + newieyork.reduce((sum, part2) => sum + part2.age, 0) + vegzas.reduce((sum, part3) => sum + part3.age, 0)
document.write('<p>Find the total age of everyone in texasss, newieyork and vegzas combined: '+array3part3+'</p>');