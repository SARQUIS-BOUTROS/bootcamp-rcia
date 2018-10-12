var operandoa;
var operandob;
var operacion;

function init(){
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    calculator(parseFloat(operandoa), operacion, parseFloat(operandob));
}
} 


function boton(num) {
    resultado.textContent = resultado.textContent + num;
}

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function calculator(){
      var result = 0;
      
  }


var calculator = function (){
    var result=0;
    return function (Val1, operacion, Val2) {
       if ( isNaN(Val1)){
          switch(operacion){
              case '+':
                   result = Val2 + result;
                   break;
               case '-':
                   result = Val2 - result;
                   break;
               case '*':
                   result = Val2 * result;
                   break;
               case '/':
                   if (result != 0){result = Val2 / result } else { alert('No se puede realizar la operacion'); result=0};
                   break;
          }
       } else {
           switch(operacion) {
               case '+':
                   result = Val1 + Val2;
                   break;
               case '-':
                   result = Val1 - Val2;
                   break;
               case '*':
                   result = Val1 * Val2;
                   break;
               case '/':
                   if (Val2 != 0){ result = Val1 / Val2} else { alert('No se puede realizar la operacion'); result=0};
                   break;
           }
        };
        
   resultado.textContent = result;
}

}() ;

