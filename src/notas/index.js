import { EventEmitter } from 'events'

const notas = new EventEmitter()

export default notas

notas.tintos = [
  {
    categoria: 'Visual',
    foto_url: 'static/img/tranquilos/visual.jpg',
    descricao: 'Na avaliação visual não há nuances de nota. Ou o vinho está correto ou não está: tem defeito. Veja que a cor, a intensidade de elementos corantes e a densidade cromática são opções do enólogo e não devem ser vinculadas à tipicidade e/ou penalizadas. Assim, não se deve penalizar um Pinot Noir denso, escuro, corpulento, ou, em caso contrário, um Syrah que se apresente clarete, diluído e magro. Essa pode ter sido uma opção do enólogo diante das uvas de que dispunha. Avalia-se a qualidade intrínseca do vinho, não por comparação com paradigmas pré-estabelecidos. Por outro lado, se está opaco, fosco ou apresenta sedimentos incompatíveis com seu estágio de amadurecimento, está defeituoso. \n A avaliação visual é a menos importante da degustação organoléptica. Nesta ficha, concorre com apenas 10 pontos máximos e prevê a perda de apenas 7 pontos.',
    nota: 10,
    subcategorias: [
      {
        categoria: {
          nome: 'Limpidez',
          descricao: 'É a avaliação relacionada à transparência, à translucidez do vinho: avalie se é possível visualizar através do copo, passando a caneta ou o dedo atrás do copo, diante de um fundo branco ou retro-iluminado. \n Elementos em suspensão também podem ser avaliados como passíveis de penalização, especialmente em vinhos mais jovens (mesmo em degustações às cegas, a safra é eventualmente informada), o que traz um problema para vinhos não filtrados, que podem ter micropartículas em suspensão.'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Brilho',
          descricao: 'Quase sempre acompanha a avaliação de limpidez, pois vinhos opacos e/ou turvos também não têm brilho, mas pode haver casos em que o vinho tenha indesejadas partículas em suspensão e ainda assim seja brilhante. Diante dessa situação, só cabe penalizar tal amostra pela limpidez – mas não pelo brilho.'
        },
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'static/img/tranquilos/olfativa.jpg',
    descricao: 'Na avaliação olfativa há cinco possibilidades de nota, com a efígie da expressão figurativa no alto indicando, a grosso modo (da esq. para a dir.): Muito bom, Bom, Médio, Ruim e Defeituoso. As análises de Intensidade e Franqueza decrescem ponto a ponto, enquanto a de Qualidade impõe a perda de dois pontos por coluna.',
    nota: 34,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'É certamente a mais auto-explicativa. Reflete o volume de aroma, sua pungência, potência. Deve ser avaliada com o vinho em repouso e após agitação. A intensidade aromática se manifesta em duas fases: o ataque inicial e após alguns segundos no copo.'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Sempre o quesito mais discutido. Define a facilidade com que se identifica o aroma, ou família de aromas. Também define a sanidade do vinho. Separa vinhos “limpos” aromaticamente, de vinhos com aroma “sujo”. Quanto mais claramente se apresentar o aroma do vinho e mais fácil for a sua identificação, maior a sua franqueza. Um vinho com aromas que se mesclam entre agradáveis e desagradáveis, como enxofre e frutas vermelhas, por exemplo, não teria um aroma límpido, definido – e portanto estaria passível de penalização por pouca franqueza. A maior parte dos defeitos aromáticos ataca a franqueza do vinho, caso do TCA/TBA (bouchonée) e dos aromas redutivos e ou sulfurosos.'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'É o item mais importante da avaliação aromática. O degustador deve aplicar aqui a sua capacidade de reconhecer qualidade e não suas preferências de gosto pessoal. Um bom provador não precisa gostar, por exemplo, de vinhos rosados, para reconhecer as qualidades de um rosé. Na avaliação qualitativa, o mais importante a valorizar é o equilíbrio entre as diversas facetas aromáticas do vinho, e o reconhecimento dos aromas primários (advindos da fruta, da planta, das raízes, do solo e do clima), secundários (advindos do processo de elaboração/vinificação, como a ação das leveduras, extração, controle de temperatura, fermentação malolática, em barricas de madeira etc.) e terciários (advindos do processo de estágio, seja em carvalho, em receptáculo neutro –aço ou fibra– ou na própria garrafa).'
        },
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'static/img/tranquilos/gustativa.jpg',
    descricao: 'Ao paladar também há cinco possibilidades de nota, com a efígie da expressão figurativa no alto indicando, a grosso modo (da esq. para a dir.): Muito bom, Bom, Médio, Ruim e Defeituoso. As análises de Intensidade, Franqueza e Persistência decrescem ponto a ponto, enquanto a de Qualidade impõe a perda de três pontos por coluna. \n A avaliação pelo paladar é a mais importante da degustação organoléptica. Nesta ficha, concorre com 45 pontos máximos e prevê a perda de até 25 pontos.',
    nota: 42,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'É o volume de sabor captado pelas papilas gustativas. Um vinho insípido, aguado, diluído, teria eventualmente uma avaliação mais baixa neste quesito, enquanto um vinho com muita acidez, capaz de impressionar fortemente o palato, alcançaria valores mais elevados.'
        },
        notasPossiveis: [9, 8, 7, 5, 4],
        selecionada: 9
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'É a identificação precisa de um sabor do vinho, avalia a limpidez gustativa do vinho, sua clareza ao paladar. Também define a sanidade do vinho. Aqui se penaliza a maioria dos defeitos causados por leveduras indesejadas, como a brettanomices ou os fungos de rolha, e se premia o sabor claro, definido.'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Aqui aparece a busca pelo equilíbrio e também pela complexidade. O equilíbrio é definido entre a acidez, a alcoolicidade, a carga tânica (adstringência, presente majoritariamente em tintos), o açúcar presente e o corpo (extrato seco) do vinho. O conjunto desses elementos deve ser harmônico e resultar em um sabor apreciável, apetecível e são.'
        },
        notasPossiveis: [22, 19, 16, 13, 10],
        selecionada: 22
      },
      {
        categoria: {
          nome: 'Persistência',
          descricao: 'Avalia a permanência do sabor de um vinho no palato após a deglutição ou degustação, no caso de tratar-se de uma prova técnica, em que a ingesta do vinho é desaconselhada ou vetada. É medida em caudalies, termo francês que denomina a unidade de medida desta permanência gustativa, e equivale a segundos. Exemplo: “este é um vinho de 15 caudalies”.'
        },
        notasPossiveis: [8, 7, 6, 5, 4],
        selecionada: 8
      }
    ]
  },
  {
    categoria: 'Harmonia',
    foto_url: 'static/img/tranquilos/conjunto.jpg',
    nota: 11,
    subcategorias: [
      {
        categoria: {
          nome: 'Harmonia',
          descricao: 'A última fase da avaliação deve contemplar em que medida visual, aroma e paladar se combinam, se estão em harmonia ou desacordo, e se se mantêm em equilíbrio. \n Essa nota deve, portanto, acompanhar as demais. Um vinho que tenha sido avaliado como excelente e muito bom na maioria dos quesitos não deve ter a harmonia penalizada, por exemplo, por questão de coerência.'
        },
        notasPossiveis: [11, 10, 9, 8, 7],
        selecionada: 11
      }
    ]
  },
]

notas.espumantes = [
  {
    categoria: 'Visual',
    foto_url: 'static/img/espumantes/visual.jpg',
    descricao: 'Na avaliação visual não há nuances de nota. Ou o vinho está correto ou não está: tem defeito. Veja que a cor, a intensidade de elementos corantes e a densidade cromática são opções do enólogo e não devem ser vinculadas à tipicidade e/ou penalizadas. Assim, não se deve penalizar um Pinot Noir denso, escuro, corpulento, ou, em caso contrário, um Syrah que se apresente clarete, diluído e magro. Essa pode ter sido uma opção do enólogo diante das uvas de que dispunha. Avalia-se a qualidade intrínseca do vinho, não por comparação com paradigmas pré-estabelecidos. Por outro lado, se está opaco, fosco ou apresenta sedimentos incompatíveis com seu estágio de amadurecimento, está defeituoso. \n A avaliação visual é a menos importante da degustação organoléptica. Nesta ficha, concorre com apenas 10 pontos máximos e prevê a perda de apenas 7 pontos.',
    nota: 10,
    subcategorias: [
      {
        categoria: {
          nome: 'Limpidez',
          descricao: 'É a avaliação relacionada à transparência, à translucidez do vinho: avalie se é possível visualizar através do copo, passando a caneta ou o dedo atrás do copo, diante de um fundo branco ou retro-iluminado. \n Elementos em suspensão também podem ser avaliados como passíveis de penalização, especialmente em vinhos mais jovens (mesmo em degustações às cegas, a safra é eventualmente informada), o que traz um problema para vinhos não filtrados, que podem ter micropartículas em suspensão.'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Brilho',
          descricao: 'Quase sempre acompanha a avaliação de limpidez, pois vinhos opacos e/ou turvos também não têm brilho, mas pode haver casos em que o vinho tenha indesejadas partículas em suspensão e ainda assim seja brilhante. Diante dessa situação, só cabe penalizar tal amostra pela limpidez – mas não pelo brilho.'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Efervescência',
          descricao: 'Apenas nos vinhos efervescentes: espumantes (entre 4 e 6 atm de pressão de gás carbônico na garrafa) ou frisantes (até 2,5 atm de pressão de CO2 naturalmente dissolvido no vinho). Avalia o volume de borbulhas formado no copo. Também considera a persistência da mousse e do anel de espuma sobre o líquido, bem como a intensidade e longevidade da pérlage, a coluna de bolhas que se desprende do fundo do copo. O tamalho das bolhas também importa: quanto menores e mais delicadas, melhor, indicando vinificação mais cuidadosa, pois o CO2 está melhor integrado ao líquido. É de difícil avaliação técnica, pois os copos tendem a dificultar, com enchimentos seguidos, a formação de pérlage e a persistência das bolhas. Recomenda-se avaliar a formação e duração da espuma na boca, com a liberação de CO2 sobre a língua, e a consequente sensação de agulha, frescor e “limpeza” do palato. Nos vinhos finos, o gás é natural, e resulta de um dos processos de fermentação que origina o vinho. Mas note que há raros vinhos, quase sempre de baixa qualidade, com CO2 adicionado, como em um refrigerante. As bolhas são grandes e evanescem rapidamente.'
        },
        notasPossiveis: [5, 4, 3, 2, 1],
        selecionada: 5
      },
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'static/img/espumantes/olfativa.jpg',
    descricao: 'Na avaliação olfativa há cinco possibilidades de nota, com a efígie da expressão figurativa no alto indicando, a grosso modo (da esq. para a dir.): Muito bom, Bom, Médio, Ruim e Defeituoso. As análises de Intensidade e Franqueza decrescem ponto a ponto, enquanto a de Qualidade impõe a perda de dois pontos por coluna.',
    nota: 34,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'É certamente a mais auto-explicativa. Reflete o volume de aroma, sua pungência, potência. Deve ser avaliada com o vinho em repouso e após agitação. A intensidade aromática se manifesta em duas fases: o ataque inicial e após alguns segundos no copo.'
        },
        notasPossiveis: [8, 7, 5, 4, 3],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Sempre o quesito mais discutido. Define a facilidade com que se identifica o aroma, ou família de aromas. Também define a sanidade do vinho. Separa vinhos “limpos” aromaticamente, de vinhos com aroma “sujo”. Quanto mais claramente se apresentar o aroma do vinho e mais fácil for a sua identificação, maior a sua franqueza. Um vinho com aromas que se mesclam entre agradáveis e desagradáveis, como enxofre e frutas vermelhas, por exemplo, não teria um aroma límpido, definido – e portanto estaria passível de penalização por pouca franqueza. A maior parte dos defeitos aromáticos ataca a franqueza do vinho, caso do TCA/TBA (bouchonée) e dos aromas redutivos e ou sulfurosos.'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'É o item mais importante da avaliação aromática. O degustador deve aplicar aqui a sua capacidade de reconhecer qualidade e não suas preferências de gosto pessoal. Um bom provador não precisa gostar, por exemplo, de vinhos rosados, para reconhecer as qualidades de um rosé. Na avaliação qualitativa, o mais importante a valorizar é o equilíbrio entre as diversas facetas aromáticas do vinho, e o reconhecimento dos aromas primários (advindos da fruta, da planta, das raízes, do solo e do clima), secundários (advindos do processo de elaboração/vinificação, como a ação das leveduras, extração, controle de temperatura, fermentação malolática, em barricas de madeira etc.) e terciários (advindos do processo de estágio, seja em carvalho, em receptáculo neutro –aço ou fibra– ou na própria garrafa).'
        },
        notasPossiveis: [16, 14, 12, 10, 8],
        selecionada: 16
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'static/img/espumantes/gustativa.jpg',
    descricao: 'Ao paladar também há cinco possibilidades de nota, com a efígie da expressão figurativa no alto indicando, a grosso modo (da esq. para a dir.): Muito bom, Bom, Médio, Ruim e Defeituoso. As análises de Intensidade, Franqueza e Persistência decrescem ponto a ponto, enquanto a de Qualidade impõe a perda de três pontos por coluna. \n A avaliação pelo paladar é a mais importante da degustação organoléptica. Nesta ficha, concorre com 45 pontos máximos e prevê a perda de até 25 pontos.',
    nota: 42,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'É o volume de sabor captado pelas papilas gustativas. Um vinho insípido, aguado, diluído, teria eventualmente uma avaliação mais baixa neste quesito, enquanto um vinho com muita acidez, capaz de impressionar fortemente o palato, alcançaria valores mais elevados.'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'É a identificação precisa de um sabor do vinho, avalia a limpidez gustativa do vinho, sua clareza ao paladar. Também define a sanidade do vinho. Aqui se penaliza a maioria dos defeitos causados por leveduras indesejadas, como a brettanomices ou os fungos de rolha, e se premia o sabor claro, definido.'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Aqui aparece a busca pelo equilíbrio e também pela complexidade. O equilíbrio é definido entre a acidez, a alcoolicidade, a carga tânica (adstringência, presente majoritariamente em tintos), o açúcar presente e o corpo (extrato seco) do vinho. O conjunto desses elementos deve ser harmônico e resultar em um sabor apreciável, apetecível e são.'
        },
        notasPossiveis: [22, 19, 16, 13, 10],
        selecionada: 22
      },
      {
        categoria: {
          nome: 'Persistência',
          descricao: 'Avalia a permanência do sabor de um vinho no palato após a deglutição ou degustação, no caso de tratar-se de uma prova técnica, em que a ingesta do vinho é desaconselhada ou vetada. É medida em caudalies, termo francês que denomina a unidade de medida desta permanência gustativa, e equivale a segundos. Exemplo: “este é um vinho de 15 caudalies”.'
        },
        notasPossiveis: [7, 6, 5, 4, 3],
        selecionada: 7
      }
    ]
  },
  {
    categoria: 'Harmonia',
    foto_url: 'static/img/espumantes/conjunto.jpg',
    nota: 11,
    subcategorias: [
      {
        categoria: {
          nome: 'Harmonia',
          descricao: 'A última fase da avaliação deve contemplar em que medida visual, aroma e paladar se combinam, se estão em harmonia ou desacordo, e se se mantêm em equilíbrio. \n Essa nota deve, portanto, acompanhar as demais. Um vinho que tenha sido avaliado como excelente e muito bom na maioria dos quesitos não deve ter a harmonia penalizada, por exemplo, por questão de coerência.'
        },
        notasPossiveis: [10, 9, 8, 7, 6],
        selecionada: 10
      }
    ]
  },
]