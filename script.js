let total = 0;

let nuevoImporte = parseInt(prompt("Estimado Cuanto cuesta su Computadora"));
distintoCero(nuevoImporte);

let ubicacion = parseInt(prompt("Ingresa 1 si  estas en CABA o 2 si esta en GBA/BS AS?"));
lugarDeOrigen(ubicacion);

if(ubicacion ==1){
	gastosDeEnvio (nuevoImporte, 65);
} else if(ubicacion ==2){
	gastosDeEnvio  (nuevoImporte, 85);
}

alert("Si tu venta es de" + nuevoImporte + " Tu ganancia total es de" + total);

function distintoCero(y){
	while (y==0 || y < 0){
		y = parseInt(prompt("Ingresa un monton mayor a cero"));
	}
	return nuevoImporte=y;
}

function lugarDeOrigen(x){
	while (x != 1 && x!=2){
		x = parseInt(prompt("Ingresa una opcion valida"));
	}
	return ubicacion=x;
}20000

function gastosDeEnvio  (a, b){
	total = (a*b)/100;
	return total;
}	