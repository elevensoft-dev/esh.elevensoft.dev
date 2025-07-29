import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

let app: FirebaseApp;

export function getFirebaseApp() {
  if (!app) {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    };

    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  }

  return app;
}

export function getDb() {
  return getFirestore(getFirebaseApp());
}

