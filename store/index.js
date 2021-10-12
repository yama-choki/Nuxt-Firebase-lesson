import { v4 as uuidv4 } from 'uuid'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const usersRef = db.collection('users')

export const state = () => ({
  users: []
})

export const actions = {
  addUser ({ commit }, payload) {
    const user = {
      id: uuidv4(),
      name: payload.user.name,
      age: payload.user.age,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    }

    return new Promise((resolve, reject) => {
      usersRef.add(user)
        .then((ref) => {
          resolve(true)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('An error occurred in addUser(): ', error)
          reject(error)
        })
    })
  },
  fetchUsers ({ commit }) {
    commit('initUsers')
    return new Promise((resolve, reject) => {
      usersRef.orderBy('created_at', 'desc').get()
        .then((res) => {
          res.forEach((doc) => {
            commit('addUsers', doc.data())
            resolve(true)
          })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('An error occurred in fetchUsers(): ', error)
          reject(error)
        })
    })
  }
}

export const mutations = {
  initUsers (state) {
    state.users = []
  },
  addUsers (state, users) {
    state.users.push(users)
  }
}

export const getters = {
  getUsers (state) {
    return state.users
  }
}
