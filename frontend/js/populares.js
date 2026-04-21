function mostrarDetalhes(nome, valor, estado, ano, marca, modelo) {
    mostrarLoading();

    setTimeout(function () {
        esconderLoading();

        const conteudoModal = document.getElementById('conteudo-modal');

        conteudoModal.innerHTML = `
            <span class="fechar" onclick="fecharModal()">&times;</span>
            <h2>${nome}</h2>
            <p>Valor: R$ ${valor}</p>
            <p>Estado: ${estado}</p>
            <p>Ano: ${ano}</p>
            <p>Marca: ${marca}</p>
            <p>Modelo: ${modelo}</p>
            <button class="botão" onclick="fecharModal()">Fechar</button>
        `;

        document.getElementById('modal').style.display = 'block';
    }, 1500);
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function mostrarLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function esconderLoading() {
    document.getElementById('loading').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');

    if (event.target === modal) {
        fecharModal();
    }
};

const pesquisaInput = document.getElementById('pesquisa-carro');
const botaoBuscar = document.getElementById('botao-buscar');
const cards = document.querySelectorAll('.card');

const formBusca = document.getElementById('form-busca');

function searchCar(event) {

    //  Atualiza a página
    if(event){
        event.preventDefault();
    }

    const textoDigitado = pesquisaInput.value.toLowerCase().trim();     // Pega o texto digitado
    
    // Se a busca for vazia ele mostra todos os cards
    if(textoDigitado == ''){
        cards.forEach((card) => {
            card.style.display = 'block';
        });
        return;
    }

    let encontrouNaPagina = false;      // Motivo: Saber se o carro foi encontrado

    // Percorre a lista card
    cards.forEach((card) => {
        const nameCar = card.querySelector('.title').textContent.toLocaleLowerCase().trim();

        // Mostra os card que são condizente ao 'texto digitado'
        if(nameCar.includes(textoDigitado)){
            card.style.display = 'block';
            encontrouNaPagina = true; 
        } else {
            card.style.display = 'none';
        }
    });

    //  redireciona se o 'texto digitado' não foi encontrado nos cards
    if(encontrouNaPagina !== true){
        window.location.href = "MDLS.html" + "?carro=" + encodeURIComponent(textoDigitado);
        return;
    }
}

function pegarCarroDaURL() {
    const parametros = new URLSearchParams(window.location.search);
    const carro = parametros.get('carro');

    if (carro) {
        pesquisaInput.value = carro;
        searchCar();
    }
}


pesquisaInput.addEventListener("keyup", searchCar);
botaoBuscar.addEventListener("click", searchCar);

pegarCarroDaURL();