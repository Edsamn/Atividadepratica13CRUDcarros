let carros = [];

function telaInicial() {
  alert(
    `Bem-vindo ao sistema de CRUD de veículos: No momento o sistema tem ${carros.length} carro(s) cadastrados. Escolha uma das opções para interagir com o sistema:`
  );
}
telaInicial();

let escolha = 0;

function sistemaCrud() {
  do {
    escolha = Number(
      prompt(
        `Digite 1 para cadastrar veículo;
				 Digite 2 para listar os veículos;
				 Digite 3 para filtrar veículos por marca;
				 Digite 4 para atualizar veículo;
				 Digite 5 para remover veículo;
				 Digite 6 para sair do sitema;`
      )
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
      telaInicial();
      sistemaCrud();
    } else if (escolha === 2) {
      function listarCarros() {
        let carrosMap = carros.map((carro) => ({
          id: carro.id,
          modelo: carro.modelo,
          marca: carro.marca,
          ano: carro.ano,
          cor: carro.cor,
          valor: carro.valor,
        }));
        carrosMap
          .sort((a, b) => a.valor - b.valor)
          .forEach((carro) => {
            console.log(carro.id, "|", carro.modelo, "|", carro.marca, "|", carro.ano, "|", carro.cor, "|", carro.valor, "|");
          });
      }
      listarCarros();
      telaInicial();
      sistemaCrud();
    } else if (escolha === 3) {
      let marcaCarro = prompt("Digite a marca que deseja filtrar.");
      carros
        .filter((carro) => {
          return carro.marca === marcaCarro;
        })
        .map((carro) => ({
          id: carro.id,
          modelo: carro.modelo,
          cor: carro.cor,
          valor: carro.valor,
        }))
        .sort((a, b) => a.valor - b.valor)
        .forEach((carro) => {
          console.log(carro.id, "|", carro.modelo, "|", carro.cor, "|", carro.valor);
        });
    } else if (escolha === 4) {
      let numeroIdAtualizar = Number(prompt("Digite o identificador(id) do veículo que deseja atualizar."));
      let filtroCarrosAtualizar = carros.filter((carro) => {
        return carro.id === numeroIdAtualizar;
      });
      if (filtroCarrosAtualizar.find((carro) => carro.id === numeroIdAtualizar)) {
        filtroCarrosAtualizar.map((carro) => {
          carro.cor = prompt("Digite a nova cor do carro");
          carro.valor = prompt("Digite o novo preço do carro");
        });
      } else {
        alert("Veículo, não encontrado. O usuário deve voltar para o menu inicial depois");
        telaInicial();
        sistemaCrud();
      }
    } else if (escolha === 5) {
      let numeroIdApagar = Number(prompt("Digite o identificador(id) do veículo que deseja apagar."));
      let acharIndexApagar = carros.findIndex((carro) => carro.id === numeroIdApagar);
      if (acharIndexApagar !== -1) {
        carros.splice(acharIndexApagar, 1);
        telaInicial();
        sistemaCrud();
      } else {
        alert("Veículo não encontrado. O usuário deve voltar para o menu inicial.");
        telaInicial();
        sistemaCrud();
      }
    } else if (escolha < 1 || escolha > 6) {
      alert("Comando inválido");
      telaInicial();
      sistemaCrud();
    }
  } while (escolha !== 6);
}
sistemaCrud();
