import { getFirestore, setDoc, doc } from "firebase/firestore";
import { app } from "../../../firebase.config";

const db = getFirestore(app);

/**
 * @param {Object} user
 * @param {number} [score]
 */
export const saveUserToFirestore = async (user, score) => {
  try {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: new Date(),
      lastLoginAt: user.metadata?.lastSignInTime || new Date(),
    };

    if (typeof score === "number") {
      userData.quizScore = score;
    }

    await setDoc(doc(db, "users", user.uid), userData, { merge: true });
  } catch (error) {
    console.error("Error guardando usuario en Firestore:", error);
  }
};
