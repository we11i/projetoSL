let carros =JSON.parse(localStorage.getItem('carros')) || [
    ({nome: "Civic", preco: 60000, estado: "Novo", ano: 2023, marca: "Honda", modelo: "Civic"}),
    ({nome: "Chevetão", preco: 60000, estado: "Novo", ano: 2023, marca: "Chevrolet", modelo: "Chevette"}),
    ({nome: "Scort", preco: 70000, estado: "Novo", ano: 2023, marca: "Chevrolet", modelo: "Sorento"}),
    ({nome: "Fiat Marea", preco: 50000, estado: "Novo", ano: 2023, marca: "Fiat", modelo: "Marea"}),
    ({nome: "Golf Brabo", preco: 100000, estado: "Novo", ano: 2023, marca: "Volkswagen", modelo: "Golf"}),
    ({nome: "Lancer Evolution", preco: 80000, estado: "Novo", ano: 2023, marca: "Mitsubishi", modelo: "Lancer Evolution"})
];

function mostrarDetalhes(nome, valor, estado, ano, marca, modelo) {
    mostrarLoading();

    setTimeout(function () {
        esconderLoading();

        const conteudoModal = document.getElementById('conteudo-modal');

        conteudoModal.innerHTML = `
            <span class="fechar" onclick="fecharModal()">&times;</span>
            <h2>${nome}</h2>
            <p>Valor: ${valor}</p>
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

let pesquisaInput = document.getElementById('pesquisa-carro');
const botaoBuscar = document.getElementById('botao-buscar');
const cards = document.querySelectorAll('.card');


function filtrarCarros() {
    const textoDigitado = pesquisaInput.value.toLowerCase().trim();

    cards.forEach(function(card) {
        const nomeCarro = card.querySelector('.title').textContent.toLowerCase().trim();

        if (nomeCarro.includes(textoDigitado)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


function pegarCarroDaURL() {
    const parametros = new URLSearchParams(window.location.search);
    const carro = parametros.get('carro');

    if (carro) {
        pesquisaInput.value = carro;
        filtrarCarros();
    }
}

/*
function pesquisarEmOutraPagina(event) {
    event.preventDefault();

    const inputPesquisa = document.getElementById("pesquisa-carro");
    const textoDigitado = inputPesquisa.value.trim();

    if (textoDigitado !== "") {
        window.location.href = "MDLS.html?carro=" + encodeURIComponent(textoDigitado);
    } else {
        window.location.href = "populares.html";
    }
}
*/

function search(event){
    event.preventDefault();

    if(event){
        event.preventDefault();
    }

    const searchQuery = document.getElementById('pesquisa-carro');
    const textLowCase = searchQuery.value.toLowerCase().trim();
    
    if(textLowCase == ''){
        cards.forEach((card) => {
            card.style.display = 'block';
        });
        return;
    }

    let inPage = false;

    cards.forEach((card) => {
        const nameCar = card.querySelector('.title').textContent.toLowerCase().trim();

        if(nameCar.includes(textLowCase)){
            card.style.display = 'block';
            inPage = true;
        } else {
            card.style.display = 'none';
        }
    });

    if(inPage !== true){
        window.location.href = 'populares.html' + '?carro=' + encodeURIComponent(textLowCase);
        return;
    }
}