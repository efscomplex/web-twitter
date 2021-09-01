import * as firebase from 'firebase/app'
import {
   User,
   TwitterAuthProvider,
   signInWithPopup,
   getAuth,
} from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCvve89izlGEt8jy_hY1Pgon6tvG96Myu4',
   authDomain: 'easytweet-f576a.firebaseapp.com',
   projectId: 'easytweet-f576a',
   storageBucket: 'easytweet-f576a.appspot.com',
   messagingSenderId: '236635861494',
   appId: '1:236635861494:web:a5039a135897d5c2bd97d7',
   measurementId: 'G-D61SYEGR0Z',
}

firebase.initializeApp(firebaseConfig)

export type AuthResponse = {
   credential: any
   user: User
   error?: any
}

export const twitterAuth = (): Promise<AuthResponse> => {
   return new Promise((resolve, reject) => {
      const provider = new TwitterAuthProvider()
      signInWithPopup(getAuth(), provider)
         .then((result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result)
            const user = result.user
            console.log(user)
            resolve({ credential, user })
         })
         .catch((error) => {
            const credential = TwitterAuthProvider.credentialFromError(error)
            reject({ error, credential })
         })
   })
}
