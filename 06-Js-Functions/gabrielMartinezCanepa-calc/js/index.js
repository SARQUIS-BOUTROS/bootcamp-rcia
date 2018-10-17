// https://codepen.io/gemanepa/full/xyqqGW/

window.onload = () => 
window.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('number')){
    UpdateState(target);
  }
  else if (target.classList.contains('operator')){
    SetOperator(target);
  }
  else if (target.classList.contains('result')){
    Resultado();
  }
  else if (target.classList.contains('clean')){
    ResetState()
  }
  else if (target.classList.contains('notworking')){
    NotWorkingYet();
  }
}
)


function UpdateState(target) {
  var newState = document.getElementById('state').value.concat(target.value);
  document.getElementById('state').value = newState;
  return newState
}


function SetOperator(target) {
  if (target.value == '+') {
 document.getElementById('oldstate').value = document.getElementById('state').value + ' +';
    }
  else if (target.value == '-') {
 document.getElementById('oldstate').value = document.getElementById('state').value + ' -';
    }
  else if (target.value == '*') {
 document.getElementById('oldstate').value = document.getElementById('state').value + ' *';
    }
  else if (target.value == '/') {
 document.getElementById('oldstate').value = document.getElementById('state').value + ' /';
    }
  else if (target.value == '%') {
 document.getElementById('oldstate').value = document.getElementById('state').value + '% of';
    }
 document.getElementById('state').value = '';
}


function Resultado(oldState) {
  let operationType = document.getElementById('oldstate').value
  
  if (operationType.includes('+') == true) {
    operationType.replace(' +','');
    document.getElementById('oldstate').value = '';
   return document.getElementById('state').value = parseInt(operationType) + parseInt(document.getElementById('state').value)
  }
  
  else if (operationType.includes('-') == true) {
    operationType.replace(' -','');
    document.getElementById('oldstate').value = '';
   return document.getElementById('state').value = parseInt(operationType) - parseInt(document.getElementById('state').value)
  }
  
  else if (operationType.includes('*') == true) {
    operationType.replace(' *','');
    document.getElementById('oldstate').value = '';
   return document.getElementById('state').value = parseInt(operationType) * parseInt(document.getElementById('state').value)
  }
  
  else if (operationType.includes('/') == true) {
    operationType.replace(' /','');
    document.getElementById('oldstate').value = '';
   return document.getElementById('state').value = parseInt(operationType) / parseInt(document.getElementById('state').value)
  }
  
  else if (operationType.includes('%') == true) {
    operationType.replace('% of','');
    document.getElementById('oldstate').value = '';
   return document.getElementById('state').value = (parseInt(operationType) * parseInt(document.getElementById('state').value)) / 100
  }
}


//Clean button
function ResetState() {
  document.getElementById('state').value = '';
  document.getElementById('oldstate').value = '';
}


function NotWorkingYet(){
  alert('+/- y . todavia no funcionan como deben')
}