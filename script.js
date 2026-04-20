 const objs =  [
    {
      "nome": "Ford K",
         "valor": 12000,
          "esta_disponivel": true,
          
          "Detalhes_sobre_o_carro":{
            "estado": "novo",
             "marca": "ford",
             "Ano": 2022,
             "empresa": "KAKA Fuletagem"
    },
      "espevificações":["vermelho","chega há 160km","motor novo","120km rodados"]
      },
      {
        "nome": "fiat uno",
         "valor": 1500,
          "esta_disponivel": false,
          
          "Detalhes_sobre_o_carro":{
            "estado": "novo",
             "marca": "ford",
             "Ano": 2000,
             "empresa": "KAKA Fuletagem"
    },
      "espevificações":["Branco","chega há 200km","motor semi-novo","1.000km rodados"]

      },
      {
        "nome": "Chevrolet Onix",
         "valor": 50000,
          "esta_disponivel": true,

          "Detalhes_sobre_o_carro":{
            "estado": "novo",
             "marca": "ford",
             "Ano": 2023,
             "empresa": "KAKA Fuletagem"
    },
      "espevificações":["Prata","chega há 100km","motor novo","500km rodados"]
      },

    ];
    const jsonData = JSON.stringify(objs, null,2)
    console.log(jsonData)

    //converterdo json para objeto>>
     
    const objData = JSON.parse(jsonData);
    console.log(objData)

    objData.map((carro)=> {
        console.log(carro.nome)
    })