export default {
    state: {
        ads: [
            {   title: 'First Ad',
                description: 'Hello i am description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '123'
            },
            {   title: 'Second Ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1234'
            },
            {   title: 'Third Ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '1235'
            },
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = 'random'
            commit('createAd', payload)
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}
