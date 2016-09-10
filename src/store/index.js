// import Firebase from 'firebase'
// import { EventEmitter } from 'events'
// import { Promise } from 'es6-promise'
//
// const api = new Firebase('https://medalhados.firebaseio.com')
// const itemsCache = Object.create(null)
// const store = new EventEmitter()
// const storiesPerPage = store.storiesPerPage = 30
//
// let topStoryIds = []
//
// export default store
//
// /**
//  * Subscribe to real time updates of the top 100 stories,
//  * and cache the IDs locally.
//  */
//
// api.child('topstories').on('value', snapshot => {
//   topStoryIds = snapshot.val()
//   store.emit('topstories-updated')
// })
//
// /**
//  * Fetch an item data with given id.
//  *
//  * @param {Number} id
//  * @return {Promise}
//  */
//
// store.fetchItem = id => {
//   return new Promise((resolve, reject) => {
//     if (itemsCache[id]) {
//       resolve(itemsCache[id])
//     } else {
//       api.child('item/' + id).once('value', snapshot => {
//         const story = itemsCache[id] = snapshot.val()
//         resolve(story)
//       }, reject)
//     }
//   })
// }
//
// /**
//  * Fetch the given list of items.
//  *
//  * @param {Array<Number>} ids
//  * @return {Promise}
//  */
//
// store.fetchItems = ids => {
//   if (!ids || !ids.length) {
//     return Promise.resolve([])
//   } else {
//     return Promise.all(ids.map(id => store.fetchItem(id)))
//   }
// }
//
// /**
//  * Fetch items for the given page.
//  *
//  * @param {Number} page
//  * @return {Promise}
//  */
//
// store.fetchItemsByPage = page => {
//   const start = (page - 1) * storiesPerPage
//   const end = page * storiesPerPage
//   const ids = topStoryIds.slice(start, end)
//   return store.fetchItems(ids)
// }
//
// /**
//  * Fetch a user data with given id.
//  *
//  * @param {Number} id
//  * @return {Promise}
//  */
//
// store.fetchUser = id => {
//   return new Promise((resolve, reject) => {
//     api.child('user/' + id).once('value', snapshot => {
//       resolve(snapshot.val())
//     }, reject)
//   })
// }

import { EventEmitter } from 'events'

const store = new EventEmitter()

export default store

store.fetchUsuario = () => {
  var usuario = {
    nome: 'Otavio',
    sobrenome: 'Padovani',
    vinhos_avaliados: 43,
    avatar: 'https://pbs.twimg.com/profile_images/526523287606534144/jDJbu6zU_400x400.jpeg',
    vinhos: {
      espumantes: {
        categoria: 'Espumantes',
        foto_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxHXDJsxoGqVG4RpToyDESZU98Q11KAG7hz5xt1X3NzuTBHc_f',
        media: 82,
        avaliados: []
      },
      brancos: {
        categoria: 'Brancos',
        foto_url: 'http://lw13621580885130e654.provisorio.ws/wp-content/uploads/2013/09/destaque210.jpg',
        media: 82,
        avaliados: []
      },
      rose: {
        categoria: 'Rose',
        foto_url: 'http://andolinisrestaurant.com/wp-content/uploads/2016/05/rose-patio-pic.jpg',
        media: 82,
        avaliados: []
      },
      tintos: {
        categoria: 'Tintos',
        foto_url: 'http://paleolifestyledoctor.com/wp-content/uploads/2015/06/red-wine-free-desktop-wallpaper-5120x3200.jpg',
        media: 82,
        avaliados: []
      },
      sobremesa: {
        categoria: 'Sobremesa',
        foto_url: 'http://www.bathcakecompany.co.uk/wp-content/uploads/2016/02/IMG_20160126_162504613-e1454601329963-630x423.jpg',
        media: 82,
        avaliados: []
      }
    }
  }
  
  return usuario
}

store.fetchIndividualVinho = () => {
  var vinho = {
    nome: 'Esteva',
    foto_garrafa_url: 'http://assets.angeloni.com.br/files/images/8/4E/1A/2216906_1_A.jpg',
    tipo: 'Espumante',
    alcool: '15%',
    cepa: 'Chardonnay',
    castas: 'Touriga Nacional',
    produtor: 'Casa Ferreirinha',
    importador: 'Cantu',
    origem: 'Portugal',
    regiao: 'Douro',
    safra: '2012',
    amostra: '???',
    avaliado: false,
    nota: 0,
    notaOficial: 0,
    preco: 125,
    notas: [
      {
        categoria: 'Visual',
        foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
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
  }
  
  return vinho
}

store.fetchVinhos = () => {
  var vinhos = [
    {
      nome: 'Esteva',
      foto_garrafa_url: 'http://assets.angeloni.com.br/files/images/8/4E/1A/2216906_1_A.jpg',
      tipo: 'Espumante',
      alcool: '15%',
      cepa: 'Chardonnay',
      castas: 'Touriga Nacional',
      produtor: 'Casa Ferreirinha',
      importador: 'Cantu',
      origem: 'Portugal',
      regiao: 'Douro',
      safra: '2012',
      amostra: '???',
      avaliado: false,
      nota: 0,
      notaOficial: 0,
      preco: 75,
      notas: [
        {
          categoria: 'Visual',
          foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
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
    },
    {
      nome: 'Esteva',
      foto_garrafa_url: 'http://assets.angeloni.com.br/files/images/8/4E/1A/2216906_1_A.jpg',
      tipo: 'Espumante',
      alcool: '15%',
      cepa: 'Chardonnay',
      castas: 'Touriga Nacional',
      produtor: 'Casa Ferreirinha',
      importador: 'Cantu',
      origem: 'Portugal',
      regiao: 'Douro',
      safra: '2012',
      amostra: '???',
      avaliado: false,
      nota: 85,
      notaOficial: 0,
      preco: 95,
      notas: [
        {
          categoria: 'Visual',
          foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
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
    },
    {
      nome: 'Esteva',
      foto_garrafa_url: 'http://assets.angeloni.com.br/files/images/8/4E/1A/2216906_1_A.jpg',
      tipo: 'Espumante',
      alcool: '15%',
      cepa: 'Chardonnay',
      castas: 'Touriga Nacional',
      produtor: 'Casa Ferreirinha',
      importador: 'Cantu',
      origem: 'Portugal',
      regiao: 'Douro',
      safra: '2012',
      amostra: '???',
      avaliado: false,
      nota: 0,
      notaOficial: 0,
      preco: 125,
      notas: [
        {
          categoria: 'Visual',
          foto_url: 'http://antiwinesnob.com/wp-content/uploads/2008/04/wine-tasting-look-pic.jpg',
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
    }
  ]
  
  return vinhos
}