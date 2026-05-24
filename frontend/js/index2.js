function pesquisarEmOutraPagina(event) {
    event.preventDefault();

    const inputPesquisa = document.getElementById("pesquisa-carro");
    const textoDigitado = inputPesquisa.value.toLowerCase().trim();

    const paginas = [
        "../html/populares.html",
        "../html/MDLS.html"
    ];

    if (textoDigitado === "") return;

    const populares = ["uno", "gol", "celta", "onix", "palio"];
    const mdls = ["chevetão", "chevetao", "scort", "civic", "marea", "lancer"];

    const texto = textoDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let i = 0; i < populares.length; i++) {
        if (texto.includes(populares[i])) {
        window.location.href = paginas[0] + "?carro=" + encodeURIComponent(textoDigitado);
        return;
        }
    }

    for (let i = 0; i < mdls.length; i++) {
        if (texto.includes(mdls[i])) {
        window.location.href = paginas[1] + "?carro=" + encodeURIComponent(textoDigitado);
        return;
        }
    }

    alert("Carro não encontrado.");
}