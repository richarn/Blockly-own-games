var x = [
	[1, 0, 0],
	[0, 0, 0],
	[0, 0, 2],
];


function move_up() {

	let x2 = x.map(function(arr) {
		return arr.slice();
	});

	for (let i = 0; i < x.length; i++) {

		for (let j = 0; j < x[i].length; j++) {

			if (x[i][j] == 1) {
				if(i<=0){
					console.log("Fuera de matriz");	
				}else{
					if (x2[i-1][j] == 2) {
						alert("Ganaste!!!").destroy();
					}
					x2[i-1][j] = 1;
					x2[i][j] = 0;
				}
			}
		}
		
	}
	x = x2;
	updateTable();
}

function move_down() {
	let x2 = x.map(function(arr) {
		return arr.slice();
	});
	for (let i = 0; i < x.length; i++) {

		for (let j = 0; j < x[i].length; j++) {

			if (x[i][j] == 1) {
				if(i>=(x.length-1)){
					console.log("Fuera de matriz");	
				}else{
					if (x2[i+1][j] == 2) {
						alert("Ganaste!!!").destroy();
					}
					x2[i+1][j] = 1;
					x2[i][j] = 0;
				}
			}
		}
		
	}
	x = x2
	updateTable();
}

function move_left() {
	let x2 = x.map(function(arr) {
		return arr.slice();
	});

	for (let i = 0; i < x.length; i++) {

		for (let j = 0; j < x[i].length; j++) {

			if (x[i][j] == 1) {
				if(j<=0){
					console.log("Fuera de matriz");	
				}else{
					if (x2[i][j-1] == 2) {
						alert("Ganaste!!!").destroy();
					}
					x2[i][j-1] = 1;
					x2[i][j] = 0;
				}
			}
		}
		
	}
	x = x2
	updateTable();
}

function move_rigth() {
	let x2 = x.map(function(arr) {
		return arr.slice();
	});

	for (let i = 0; i < x.length; i++) {

		for (let j = 0; j < x[i].length; j++) {

			if (x[i][j] == 1) {
				if(j>=(x[i].length-1)){
					console.log("Fuera de matriz");	
				}else{
					if (x2[i][j+1] == 2) {
						alert("Ganaste!!!").destroy();
					}
					x2[i][j+1] = 1;
					x2[i][j] = 0;
				}
			}
		}
		
	}
	x = x2
	updateTable();
}

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

function updateTable() {
	for (let i = 0; i < x.length; i++) {

		for (let j = 0; j < x[i].length; j++) {
		if (x[i][j] == 0) {
			var celda = document.getElementById('x_'+i+'_'+j);
			celda.style.backgroundColor = "green";
		}
		if (x[i][j] == 1) {
			var celda = document.getElementById('x_'+i+'_'+j);
			celda.style.backgroundColor = "red";
		}
		if (x[i][j] == 2) {
			var celda = document.getElementById('x_'+i+'_'+j);
			celda.style.backgroundColor = "blue";
		}

		}
	}
}

function dataTable(x,y){

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
	if(x == null){
		if (y == null) {
			const defect = tabla.rows[0].cells[0];
			defect.style.cssText = ballStyle;
		}
	}else{
		const celda = tabla.rows[x].cells[y];
		celda.style.cssText = ballStyle;
	}
} 
// dataTable();


