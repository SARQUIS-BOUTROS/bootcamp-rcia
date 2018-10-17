// https://codepen.io/gemanepa/full/JmMxYK/
slot = [];
for(i=0; slot.length < 9; i++){
    slot[i] = document.querySelector('.slot'+(i+1))
}


window.onload = () => 
window.addEventListener('click', (event) => {
  const { target } = event;
  
  
  //Slot 1
  if (target.classList.contains('slot1') && target.innerHTML !== ''){
    if (slot[1].innerHTML == '') {
      return [target.innerHTML, slot[1].innerHTML] = [slot[1].innerHTML, target.innerHTML];
    }
    else if (slot[3].innerHTML == '') {
      return [target.innerHTML, slot[3].innerHTML] = [slot[3].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 2
  if (target.classList.contains('slot2') && target.innerHTML !== ''){
    if (slot[0].innerHTML == '') {
      return [target.innerHTML, slot[0].innerHTML] = [slot[0].innerHTML, target.innerHTML];
    }
    else if (slot[2].innerHTML == '') {
      return [target.innerHTML, slot[2].innerHTML] = [slot[2].innerHTML, target.innerHTML];
    }
    else if (slot[4].innerHTML == '') {
      return [target.innerHTML, slot[4].innerHTML] = [slot[4].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 3
  if (target.classList.contains('slot3') && target.innerHTML !== ''){
    if (slot[1].innerHTML == '') {
      return [target.innerHTML, slot[1].innerHTML] = [slot[1].innerHTML, target.innerHTML];
    }
    else if (slot[5].innerHTML == '') {
      return [target.innerHTML, slot[5].innerHTML] = [slot[5].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 4
  if (target.classList.contains('slot4') && target.innerHTML !== ''){
    if (slot[0].innerHTML == '') {
      return [target.innerHTML, slot[0].innerHTML] = [slot[0].innerHTML, target.innerHTML];
    }
    else if (slot[4].innerHTML == '') {
      return [target.innerHTML, slot[4].innerHTML] = [slot[4].innerHTML, target.innerHTML];
    }
    else if (slot[6].innerHTML == '') {
      return [target.innerHTML, slot[6].innerHTML] = [slot[6].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 5
  if (target.classList.contains('slot5') && target.innerHTML !== ''){
    if (slot[1].innerHTML == '') {
      return [target.innerHTML, slot[1].innerHTML] = [slot[1].innerHTML, target.innerHTML];
    }
    else if (slot[3].innerHTML == '') {
      return [target.innerHTML, slot[3].innerHTML] = [slot[3].innerHTML, target.innerHTML];
    }
    else if (slot[5].innerHTML == '') {
      return [target.innerHTML, slot[5].innerHTML] = [slot[5].innerHTML, target.innerHTML];
    }
    else if (slot[7].innerHTML == '') {
      return [target.innerHTML, slot[7].innerHTML] = [slot[7].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 6
  if (target.classList.contains('slot6') && target.innerHTML !== ''){
    if (slot[2].innerHTML == '') {
      return [target.innerHTML, slot[2].innerHTML] = [slot[2].innerHTML, target.innerHTML];
    }
    else if (slot[4].innerHTML == '') {
      return [target.innerHTML, slot[4].innerHTML] = [slot[4].innerHTML, target.innerHTML];
    }
    else if (slot[8].innerHTML == '') {
      return [target.innerHTML, slot[8].innerHTML] = [slot[8].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 7
  if (target.classList.contains('slot7') && target.innerHTML !== ''){
    if (slot[3].innerHTML == '') {
      return [target.innerHTML, slot[3].innerHTML] = [slot[3].innerHTML, target.innerHTML];
    }
    else if (slot[7].innerHTML == '') {
      return [target.innerHTML, slot[7].innerHTML] = [slot[7].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 8
  if (target.classList.contains('slot8') && target.innerHTML !== ''){
    if (slot[4].innerHTML == '') {
      return [target.innerHTML, slot[4].innerHTML] = [slot[4].innerHTML, target.innerHTML];
    }
    else if (slot[6].innerHTML == '') {
      return [target.innerHTML, slot[6].innerHTML] = [slot[6].innerHTML, target.innerHTML];
    }
    else if (slot[8].innerHTML == '') {
      return [target.innerHTML, slot[8].innerHTML] = [slot[8].innerHTML, target.innerHTML];
    }
  }
  
  //Slot 9
  if (target.classList.contains('slot9') && target.innerHTML !== ''){
    if (slot[5].innerHTML == '') {
      return [target.innerHTML, slot[5].innerHTML] = [slot[5].innerHTML, target.innerHTML];
    }
    else if (slot[7].innerHTML == '') {
      return [target.innerHTML, slot[7].innerHTML] = [slot[7].innerHTML, target.innerHTML];
    }
  }
 }
)


setTimeout(function timeout() {
    setTimeout(function () {
        if (slot[1].innerHTML == '1' &&
            slot[2].innerHTML == '2' &&
            slot[3].innerHTML == '3' &&
            slot[4].innerHTML == '4' &&
            slot[5].innerHTML == '5' &&
            slot[6].innerHTML == '6' &&
            slot[7].innerHTML == '7' &&
            slot[8].innerHTML == '8') {
              for(i = 1; i < slot.length; i++) {
    slot[i].style.color = 'red';
}
        }
        else {timeout();}
    }, 500);
})