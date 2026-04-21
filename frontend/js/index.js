function pesquisarEmOutraPagina(event) {
    event.preventDefault();

    const inputPesquisa = document.getElementById("pesquisa-carro");
    const textoDigitado = inputPesquisa.value.toLowerCase().trim();

    if (textoDigitado === "") return;

    const populares = ["uno", "gol", "celta", "onix", "palio"];
    const mdls = ["chevetão", "chevetao", "scort", "civic", "marea", "lancer"];

    const texto = textoDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let i = 0; i < populares.length; i++) {
        if (texto.includes(populares[i])) {
        window.location.href = "populares.html?carro=" + encodeURIComponent(textoDigitado);
        return;
        }
    }

    for (let i = 0; i < mdls.length; i++) {
        if (texto.includes(mdls[i])) {
        window.location.href = "mdls.html?carro=" + encodeURIComponent(textoDigitado);
        return;
        }
    }

    alert("Carro não encontrado.");
}