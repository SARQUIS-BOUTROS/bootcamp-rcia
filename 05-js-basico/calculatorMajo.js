var calculator = function (){
    var resultado=0;
    return function (Val1, operacion, Val2) {
    if ( Val2 == undefined){
    switch(operacion){
    case '+':
    resultado = Val1 + resultado;
    break;
    case '-':
    resultado = Val1 - resultado;
    break;
    case '*':
    resultado = Val1 * resultado;
    break;
    case '/':
    if (resultado != 0){resultado = Val1 / resultado } else { console.log('No se puede realizar la operacion')};
    break;
    }
    } else {
    switch(operacion) {
    case '+':
    resultado = Val1 + Val2;
    break;
    case '-':
    resultado = Val1 - Val2;
    break;
    case '*':
    resultado = Val1 * Val2;
    break;
    case '/':
    if (Val2 != 0){ resultado = Val1 / Val2} else { console.log('No se puede realizar la operacion')};
    break;
    }
    };
    return resultado;
    }
    }() ;