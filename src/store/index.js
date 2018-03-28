import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://c1.staticflickr.com/2/1697/24470537996_8d40753431_b.jpg',
        id: '1',
        title: 'Meetup in Bali',
        date: '2017-07-17'
      }
    ],
    user: {
      id: 'asdasdasdasdasd',
      registeredMeetups: ['asdasdasdasd']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    featureMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
