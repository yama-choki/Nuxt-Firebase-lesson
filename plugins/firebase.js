import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: 'AIzaSyBbw115KUhWr3urUEI_xJoH4Oa3Wqhzieg',
      authDomain: 'nuxt-firebase-lesson.firebaseapp.com',
      projectId: 'nuxt-firebase-lesson',
      storageBucket: 'nuxt-firebase-lesson.appspot.com',
      messagingSenderId: '702634026718',
      appId: '1:702634026718:web:539a996d12f0191551044f',
      measurementId: 'G-2V9XD9F1HF'
    }
  )
}

export default firebase
