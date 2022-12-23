export default {
  state: {
    ads: [
      {
        title: 'TOYOTA CRESTA',
        description: 'This car is really amazing',
        promo: true,
        imageSrc: 'https://papik.pro/uploads/posts/2021-12/1640701672_25-papik-pro-p-anime-risunki-vinil-25.jpg',
        id: '001'
      },
      {
        title: 'SUBARU BRZ',
        description: 'This car is really amazing',
        promo: true,
        imageSrc: 'https://i.pinimg.com/originals/b3/23/b8/b323b8783e8f0f8786b28f0688e08493.png',
        id: '002'
      },
      {
        title: 'MAZDA RX-7',
        description: 'This car is really amazing',
        promo: true,
        imageSrc: 'https://i.pinimg.com/originals/e8/f6/07/e8f6076e4666138c5dee34ee9a7c1581.jpg',
        id: '003'
      },
      {
        title: 'TOYOTA MARK 2',
        description: 'This car is really amazing',
        promo: false,
        imageSrc: 'https://w.wallhaven.cc/full/57/wallhaven-57zmo5.png',
        id: '004'
      },
      {
        title: 'NISSAN SILVIA S15',
        description: 'This car is really amazing',
        promo: false,
        imageSrc: 'https://pibig.info/uploads/posts/2021-04/1619173161_26-pibig_info-p-anime-drift-anime-krasivo-28.jpg',
        id: '005'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = Math.random().toString()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
