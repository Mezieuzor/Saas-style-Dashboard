// import { initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"

// const requiredEnvVars = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

// const missingVars = Object.entries(requiredEnvVars)
//   .filter(([_, value]) => !value)
//   .map(([key]) => `NEXT_PUBLIC_FIREBASE_${key.toUpperCase()}`)

// if (missingVars.length > 0) {
//   console.warn(`[v0] Missing Firebase environment variables: ${missingVars.join(", ")}`)
//   console.warn("[v0] Firebase features will not work until these are configured.")
// }

// let app: any = null
// let auth: any = null
// let db: any = null

// if (missingVars.length === 0) {
//   try {
//     app = initializeApp(requiredEnvVars)
//     auth = getAuth(app)
//     db = getFirestore(app)
//     console.log("[v0] Firebase initialized successfully")
//   } catch (error) {
//     console.error("[v0] Firebase initialization failed:", error)
//     app = null
//     auth = null
//     db = null
//   }
// } else {
//   console.log("[v0] Firebase initialization skipped - missing environment variables")
// }

// export { auth, db }
// export default app
