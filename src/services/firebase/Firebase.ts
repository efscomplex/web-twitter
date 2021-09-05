import getUserIdFromUrl from '@/utilities/getUserIdFromUrl'
import * as firebase from 'firebase/app'
import {
   User,
   TwitterAuthProvider,
   signInWithPopup,
   getAuth,
   UserCredential,
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
   oauth_credential: any
   user: User & { userId: string }
   error?: any
}

export const twitterAuth = (): Promise<AuthResponse> => {
   return new Promise((resolve, reject) => {
      const provider = new TwitterAuthProvider()
      signInWithPopup(getAuth(), provider)
         .then((result: UserCredential) => {
            const userId = getUserIdFromUrl(result._tokenResponse.federatedId)
            const credential = TwitterAuthProvider.credentialFromResult(result)
            const oauth_credential = {
               oauth_token: credential?.accessToken,
               oauth_consumer_key: credential?.secret,
            }
            const user = { ...result.user, userId }
            resolve({ oauth_credential, user })
         })
         .catch((error) => {
            const credential = TwitterAuthProvider.credentialFromError(error)
            reject({ error, credential })
         })
   })
}
