import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/** Firebase configuration */
const config = { projectId: "" };

/** Initialize Firebase */
const app = initializeApp(config);

/** Initialize Cloud Firestore and get a reference to the service */
const db = getFirestore(app);

export { db };
