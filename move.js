let x = 0;
var y = 0;
let cuadradito = document.getElementById('cuadrado');
/*
*Al llevar el eje de coordenadas al documento html hacemos una traducción
*debido a que funcionan distinto y esa diferencia es más evidente cuando trabajamos en el top.
*
*En el eje de coordenadas incremetamos para mover hacia arriba, en el top decrementamos
*para empujar hacias arriba.
*/

// function movimiento(event){
// 	if(event.keyCode == '39'){//derecha
// 		x= x + 100;
// 		cuadradito.style.left = x + 'px';
// 	}

// 	if(event.keyCode == '37'){//Izquierda
// 		x= x - 100;
// 		cuadradito.style.left = x +'px';	
// 	}
	
// 	if(event.keyCode == '38'){//arriba
// 		y = y + 100;                               
// 		cuadradito.style.top = (-y) + 'px';
// 	}

// 	if(event.keyCode == '40'){//abajo
// 		y = y - 100;                            
// 		cuadradito.style.top = (-y) + 'px';
// 	}

// }

function move_up() {
	y = y + 100;                               
	cuadradito.style.top = (-y) + 'px';
}

function move_down() {
	y = y - 100;                               
	cuadradito.style.top = (-y) + 'px';
}

function move_left() {
	x= x - 100;
	cuadradito.style.left = x +'px';
}

function move_rigth() {
	x= x + 100;
	cuadradito.style.left = x + 'px';
}

// function rotate_rigth(){
// 	r = 45;
// 	cuadradito.style.rotate = r + 'deg';
// 	console.log(cuadradito);
// }

// window.onkeyup = movimiento;

function mover(direccion){

	if (direccion == "move_up") {
		move_up();
	}
	
	if (direccion == "move_down") {
		move_down();
	}
	
	if (direccion == "move_left") {
		move_left();
	}
	
	if (direccion == "move_rigth") {
		move_rigth();
	}
	//rotate function
	// if (direccion == "rotate_rigth") {
	// 	rotate_rigth();
	// }
	return "test";
}
