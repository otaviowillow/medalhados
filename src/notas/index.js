import { EventEmitter } from 'events'

const notas = new EventEmitter()

export default notas

notas.tintos = [
  {
    categoria: 'Visual',
    foto_url: 'static/img/visual.jpg',
    nota: 10,
    subcategorias: [
      {
        categoria: 'Limpidez',
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: 'Brilho2',
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'static/img/cheiro.jpg',
    nota: 34,
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'static/img/gosto.jpg',
    nota: 42,
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      },
      {
        categoria: 'Persistência',
        notasPossiveis: [8, 7, 6, 5, 4],
        selecionada: 8
      }
    ]
  },
]

notas.espumantes = [
  {
    categoria: 'Visual',
    foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
    notaTotal: 86,
    subcategorias: [
      {
        categoria: 'Limpidez',
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: 'Brilho',
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'http://ljta2004.squarespace.com/storage/smell.jpg?__SQUARESPACE_CACHEVERSION=1357951944885',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'http://www.creme-de-languedoc.com/Sliders/wine-tasting/data1/images/8695647088_7d42f544a6_b.jpg',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      },
      {
        categoria: 'Persistência',
        notasPossiveis: [8, 7, 6, 5, 4],
        selecionada: 8
      }
    ]
  },
]

notas.brancos = [
  {
    categoria: 'Visual',
    foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
    notaTotal: 86,
    subcategorias: [
      {
        categoria: 'Limpidez',
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: 'Brilho',
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'http://ljta2004.squarespace.com/storage/smell.jpg?__SQUARESPACE_CACHEVERSION=1357951944885',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'http://www.creme-de-languedoc.com/Sliders/wine-tasting/data1/images/8695647088_7d42f544a6_b.jpg',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      },
      {
        categoria: 'Persistência',
        notasPossiveis: [8, 7, 6, 5, 4],
        selecionada: 8
      }
    ]
  },
]

notas.sobremesa = [
  {
    categoria: 'Visual',
    foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
    notaTotal: 10,
    subcategorias: [
      {
        categoria: 'Limpidez',
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: 'Brilho',
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'http://ljta2004.squarespace.com/storage/smell.jpg?__SQUARESPACE_CACHEVERSION=1357951944885',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'http://www.creme-de-languedoc.com/Sliders/wine-tasting/data1/images/8695647088_7d42f544a6_b.jpg',
    subcategorias: [
      {
        categoria: 'Intensidade',
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: 'Franqueza',
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: 'Qualidade',
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      },
      {
        categoria: 'Persistência',
        notasPossiveis: [8, 7, 6, 5, 4],
        selecionada: 8
      }
    ]
  },
]