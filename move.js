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
	y = y + 96;                               
	cuadradito.style.top = (-y) + 'px';
}

function move_down() {
	y = y - 96;                               
	cuadradito.style.top = (-y) + 'px';
}

function move_left() {
	x= x - 96;
	cuadradito.style.left = x +'px';
}

function move_rigth() {
	x= x + 96;
	cuadradito.style.left = x + 'px';
}

// function ballPosition() {
// 	const element = document.getElementById('cuadrado');
// 	const ball = element.getBoundingClientRect();

// 	if( ball.top == 341 && ball.left == 1394 ){
// 		alert("Adentro, lo lograste!").destroy();
// 	}
// 	console.log('cuadrado-top:', ball.top, 'cuadrado-left:', ball.left);

// }
// window.onkeyup = movimiento;

//funcion para bloque mover
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

}

 function verificar(){
	ballPosition();
 }

 var table = [];
 var ballStyle = `
	background-color: red;
	height: 20px;
	width: 20px;
	border-radius: 80px;
	position: absolute;
 `;
 
 var tabla = document.getElementById("table");
 for (var i = 0, row; row = tabla.rows[i]; i++) {

	for (var j = 0, col; col = row.cells[j]; j++) {
		// console.log(`Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}`);
	}
}
const celda = tabla.rows[0].cells[1];
celda.style.cssText = ballStyle;
// console.log(tabla.rows[10].cells[1].style.ballStyle);
 


