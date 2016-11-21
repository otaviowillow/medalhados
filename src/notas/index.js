import { EventEmitter } from 'events'

const notas = new EventEmitter()

export default notas

notas.tintos = [
  {
    categoria: 'Visual',
    foto_url: 'static/img/tranquilos/visual.jpg',
    nota: 10,
    subcategorias: [
      {
        categoria: {
          nome: 'Limpidez',
          descricao: 'Limpidez Ips Lorem'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Brilho',
          descricao: 'Brilho Ips Lorem'
        },
        notasPossiveis: [5, 2],
        selecionada: 5
      }
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'static/img/tranquilos/olfativa.jpg',
    nota: 34,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'Intensidade Ips Lorem'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Franqueza Ips Lorem'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Qualidade Ips Lorem'
        },
        notasPossiveis: [20, 18, 16, 14, 12],
        selecionada: 20
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'static/img/tranquilos/gustativa.jpg',
    nota: 42,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'Intensidade Ips Lorem'
        },
        notasPossiveis: [9, 8, 7, 5, 4],
        selecionada: 9
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Franqueza Ips Lorem'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Qualidade Ips Lorem'
        },
        notasPossiveis: [22, 19, 16, 13, 10],
        selecionada: 22
      },
      {
        categoria: {
          nome: 'Persistência',
          descricao: 'Persistência Ips Lorem'
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
          descricao: 'Harmonia Ips Lorem'
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
    nota: 10,
    subcategorias: [
      {
        categoria: {
          nome: 'Limpidez',
          descricao: 'Limpidez Ips Lorem'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Brilho',
          descricao: 'Brilho Ips Lorem'
        },
        notasPossiveis: [5, 1],
        selecionada: 5
      },
      {
        categoria: {
          nome: 'Efervescência',
          descricao: 'Efervescência Ips Lorem'
        },
        notasPossiveis: [5, 4, 3, 2, 1],
        selecionada: 5
      },
    ]
  },
  {
    categoria: 'Olfativa',
    foto_url: 'static/img/espumantes/olfativa.jpg',
    nota: 34,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'Intensidade Ips Lorem'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Franqueza Ips Lorem'
        },
        notasPossiveis: [8, 7, 5, 4, 3],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Qualidade Ips Lorem'
        },
        notasPossiveis: [16, 14, 12, 10, 8],
        selecionada: 16
      }
    ]
  },
  {
    categoria: 'Gustativa',
    foto_url: 'static/img/espumantes/gustativa.jpg',
    nota: 42,
    subcategorias: [
      {
        categoria: {
          nome: 'Intensidade',
          descricao: 'Intensidade Ips Lorem'
        },
        notasPossiveis: [8, 7, 6, 4, 2],
        selecionada: 8
      },
      {
        categoria: {
          nome: 'Franqueza',
          descricao: 'Franqueza Ips Lorem'
        },
        notasPossiveis: [6, 5, 4, 3, 2],
        selecionada: 6
      },
      {
        categoria: {
          nome: 'Qualidade',
          descricao: 'Qualidade Ips Lorem'
        },
        notasPossiveis: [22, 19, 16, 13, 10],
        selecionada: 22
      },
      {
        categoria: {
          nome: 'Persistência',
          descricao: 'Persistência Ips Lorem'
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
          descricao: 'Harmonia Ips Lorem'
        },
        notasPossiveis: [10, 9, 8, 7, 6],
        selecionada: 10
      }
    ]
  },
]