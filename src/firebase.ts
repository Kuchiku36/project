import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkWyp2rSpm3KZ4pWZcNaoqW5WcWRiZXzc",
  authDomain: "visiondesigne-ed6cd.firebaseapp.com",
  projectId: "visiondesigne-ed6cd",
  storageBucket: "visiondesigne-ed6cd.firebasestorage.app",
  messagingSenderId: "303685066864",
  appId: "1:303685066864:web:2eb69cf06b9c9615e494b5",
  measurementId: "G-N0ZVKSBCT9"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCC_5ifJFKjz7dIfEK_7W3q6i95hD4Gjis",
//   authDomain: "chat-9ddc1.firebaseapp.com",
//   projectId: "chat-9ddc1",
//   storageBucket: "chat-9ddc1.firebasestorage.app",
//   messagingSenderId: "816015555011",
//   appId: "1:816015555011:web:85b48dbc8f56f98bf6a576"
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);