// ARRAY 1
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
function older24(arr){
  return arr.filter(elem => elem["age"] > 24);
};

// Part 2 - Find the total age of all users
function totalAgeTexas(arr){
  return arr.reduce((tot,elem)=>tot+elem["age"],0);
};

// Part 3 - List all female coders
function female(arr){
  return arr.filter(elem => elem["gender"] == 'f');
};


// ARRAY 2
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
function usOrdered(arr){
  let filtered = arr.filter(elem => elem["us"] == true);
  return filtered.sort(compareFunc);
}
function compareFunc(arr1,arr2){
  if(arr1['name']<arr2['name']){
    return -1;
  }else{
    if(arr1['name']>arr2['name']){
      return 1;
    }else{
      return 0;
    }
  }
};

// Part 2 - Sort all users by age
function ageSorted(arr){
  return arr.sort(function(elem1,elem2){return elem1["age"]-elem2["age"]});
}

// Part 3 -  List all female coders
function female(arr){
  return arr.filter(elem => elem["gender"] == 'f');
};


// ARRAY 3
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
function under25Total(arr){
  let filtered = arr.filter(elem => elem["age"] < 25);
  return filtered.reduce((tot,elem)=>tot+elem["age"],0);
};

// Part 2 - List all male coders over 30
function maleUnder30(arr){
  let filtered = arr.filter(elem => elem["gender"] == 'm');
  return filtered.filter(elem => elem["age"] < 30);
};

// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
function ageTotal(arr1,arr2,arr3){
  tot1 = arr1.reduce((tot,elem)=>tot+elem["age"],0);
  tot2 = arr2.reduce((tot,elem)=>tot+elem["age"],0);
  tot3 = arr3.reduce((tot,elem)=>tot+elem["age"],0);
  return tot1+tot2+tot3;
}