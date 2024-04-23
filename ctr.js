const cadastrar = [];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar() {
    rl.question('Opcoes:\n\nCadastrar[1]\nAlterar[2]\nDeletar[3]\nVer Estoque[4]\n', (resposta) => {
        if (resposta == 1) {
            rl.question('Digite o produto que você deseja cadastrar: ', (produto) => {
                cadastrar.push(produto);
                console.log('Dado cadastrado com sucesso:', produto);
                console.log('Dados cadastrados:', cadastrar);
                perguntar(); // Faça a próxima pergunta
            });
        } else if (resposta == 2) {
            console.log('2');
            perguntar();
        } else if (resposta == 3) {
            console.log('3');
            perguntar();
        } else if (resposta == 4) {
            console.log(cadastrar);
            perguntar();
        } else {
            console.log('Opção inválida');
            perguntar();
        }
    });
}

perguntar(); // Inicie o processo de perguntas
