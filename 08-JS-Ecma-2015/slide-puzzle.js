
function move(pos){

	if(typeof empty == 'undefined'){
		empty = 16;
	};

	if(typeof actual == 'undefined'){
		actual = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	};

	if(typeof posible == 'undefined'){
		posible = [12,15];
	};

	where = empty - pos;

	val = actual[pos-1];

	elem = document.getElementById("piece"+val);

	band = true;

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
			console.log('up ok.')
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