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

import * as firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const itemsCache = Object.create(null)

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
    notas: []
  }
  
  return vinho
}

store.fetchVinhos = () => {
  var vinhos = firebase.database().ref('vinhos');

  return new Promise((resolve, reject) => {
    vinhos.once('value', function(snapshot) {
      resolve(snapshot.val())
    }, reject)
  })
}

var config = {
  apiKey: "AIzaSyC8Blps39GwdxP57vPaok1135Pbr9ROMbA",
  authDomain: "medalhados.firebaseapp.com",
  databaseURL: "https://medalhados.firebaseio.com",
  storageBucket: "medalhados.appspot.com",
};

firebase.initializeApp(config);

store.getFichasLidas = id => {
  var lidas = firebase.database().ref('usuarios/' + id + '/lidas')

  return new Promise((resolve, reject) => {
    lidas.once('value', function(snapshot) {
      resolve(snapshot.val())
    }, reject)
  })
}