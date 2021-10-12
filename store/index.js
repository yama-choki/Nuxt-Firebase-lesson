import { v4 as uuidv4 } from 'uuid'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const usersRef = db.collection('users')

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
  }
}
