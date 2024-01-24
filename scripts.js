let carros = [];

function telaInicial() {
	alert(
		`Bem-vindo ao sistema de CRUD de veículos: No momento o sistema tem ${carros.length} carros cadastrados. Escolha uma das opções para interagir com o sistema:`
	);
}
telaInicial();

let escolha = 0;

function sistemaCrud() {
	do {
		escolha = Number(
			prompt(`Digite 1 para cadastrar veículo;
	Digite 2 para listar os veículos;
	Digite 3 para filtrar veículos por marca;
	Digite 4 para atualizar veículo;
	Digite 5 para remover veículo;
	Digite 6 para sair do sitema;`)
		);

		if (escolha === 1) {
			function criarCarro() {
				let carro = {};
				carro.id = Math.floor(Math.random() * 100);
				carro.modelo = prompt("Digite o modelo do carro");
				carro.marca = prompt("Digite a marca do carro");
				carro.ano = prompt("Digite o ano do carro");
				carro.cor = prompt("Digite o cor do carro");
				carro.valor = prompt("Digite o valor do carro");
				carros.push(carro);
			}
			criarCarro();
		} else if (escolha === 2) {
			function listarCarros() {
				console.log(carros);
			}
			listarCarros();
		} else if (escolha === 3) {
			let marcaCarro = prompt("Digite a marca que deseja filtrar.");
			let filtroMarca = carros.filter(
				(carro) => carro.marca === marcaCarro
			);
			console.log(filtroMarca);
		} else if (escolha === 4) {
			let idCarro = prompt(
				"Digite o identificador do veículo que deseja atualizar."
			);
		} else if (escolha === 5) {
		} else if (escolha < 1 || escolha > 6) {
			alert("Comando inválido");
			telaInicial();
			sistemaCrud();
		}
	} while (escolha !== 6);
}
sistemaCrud();

// while (escolha === 6) {
// 	telaInicial();
// 	sistemaCrud();
// }
