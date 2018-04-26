
function AquecimentoRapido() {
	document.getElementById("Nome").setAttribute('value', 'Padrão');
	document.getElementById("Tempo").setAttribute('value', 30);
	document.getElementById("Potencia").setAttribute('value', 8);
}

function propriedades(Nome) {

	if (document.getElementById("Nome").value == "") {
		document.getElementById("Tempo").setAttribute('value', '');
		document.getElementById("Potencia").setAttribute('value', '');
	}
	else {
		var tempo = document.getElementById("tempoH" + Nome).value;
		var potencia = document.getElementById("potenciaH" + Nome).value;
		document.getElementById("Tempo").setAttribute('value', tempo);
		document.getElementById("Potencia").setAttribute('value', potencia);
	}
}

function mostrarR() {
	divResultadoR.innerText = 'Padrão';
	var intervalo = setInterval(function () {
		divResultadoR.innerText += '........';
	}, 1000);

	setTimeout(function () {
		clearInterval(intervalo);
		document.getElementById('voltarR').removeAttribute('disabled');
		h1AquecidoR.innerText = 'Aquecido!';
	}, 31000);
	
}

function mostrar() {

	var nome = document.getElementById("nomeAquecer").value;
	var tempo = document.getElementById("tempoAquecer").value;
	var potencia = document.getElementById("potenciaAquecer").value;
	var caracter = document.getElementById("caracterAquecer").value;

	var aux = caracter;
	divResultado.innerText = nome;
	for (i = 0; i < potencia-1; i++) {
		caracter += aux;
	}
	
	tempo = (tempo * 1000) + 1000;
	var intervalo = setInterval(function () {
		divResultado.innerText += caracter;
		
	}, 1000);

	setTimeout(function () {
		clearInterval(intervalo);
		document.getElementById('voltar').removeAttribute('disabled');
		h1Aquecido.innerText = 'Aquecido!';
	}, tempo);
}

