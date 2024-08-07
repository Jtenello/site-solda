function adicionarTrabalho() {
    const servico = document.getElementById('add-servico').value;
    const numeroOrdem = document.getElementById('add-numero-ordem').value;
    const anoServico = document.getElementById('add-ano-servico').value;

    if (servico && numeroOrdem && anoServico) {
       
        alert('Trabalho adicionado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function consultarTrabalho() {
    const numeroOrdem = document.getElementById('consultar-numero-ordem').value;

    if (numeroOrdem) {
        
        alert('Consulta realizada com sucesso!');
    } else {
        alert('Por favor, insira o número da ordem de serviço.');
    }
}

function excluirTrabalho() {
    const numeroOrdem = document.getElementById('excluir-numero-ordem').value;

    if (numeroOrdem) {
       
        alert('Trabalho excluído com sucesso!');
    } else {
        alert('Por favor, insira o número da ordem de serviço.');
    }
}
