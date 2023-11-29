import { db } from "./firebaseConfig";
export async function getBikes() {
  const dbRef = db.ref("/mountainbikes");
  const dataSnapshot = await dbRef.once("value");
  return dataSnapshot.val();
}
