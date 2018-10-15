


var move = (function(){

	empty = 16;
	actual = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	posible = [12,15];
	left = [1,5,9,13];
	right = [4,8,12,16];
	complete = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

	return function(val){

	/*if(typeof empty == 'undefined'){
		empty = 16;
	};

	if(typeof actual == 'undefined'){
		actual = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	};

	if(typeof posible == 'undefined'){
		posible = [12,15];
	};*/

	pos = actual.indexOf(val)+1;

	where = empty - pos;

	//val = actual[pos-1];

	elem = document.getElementById("piece"+val);

	band = true;

	if(where == -1 && left.includes(pos)){
		band = false;
		where = 0;
	};

	if(where == 1 && right.includes(pos)){
		band = false;
		where = 0;
	};

	switch(where){
		case -1:
			moveLeft(elem);
			break;
		case 1:
			moveRight(elem);
			break;
		case 4:
			moveDown(elem);
			break;
		case -4:
			moveUp(elem);
			break;
		default:
			band = false;
			break;
	};

	if(band){
		actual[pos-1] = actual[empty-1];

		actual[empty-1] = val;

		empty = pos;

		if(JSON.stringify(actual) === JSON.stringify(complete)){
			document.getElementById("puzzle").className = "complete";
		}else{
			document.getElementById("puzzle").className = "";
		}

		
	};

	

	function moveLeft(elem){
		position = Number(elem.style.left.slice(0,-2));
		position = position - 52;
		elem.style.left = position+'px';
	}

	function moveDown(elem){
		position = Number(elem.style.top.slice(0,-2));
		position = position + 52;
		elem.style.top = position+'px';
	}

	function moveRight(elem){
		position = Number(elem.style.left.slice(0,-2));
		position = position + 52;
		elem.style.left = position+'px';
	}

	function moveUp(elem){
		position = Number(elem.style.top.slice(0,-2));
		position = position - 52;
		elem.style.top = position+'px';
	}
	
};

})();