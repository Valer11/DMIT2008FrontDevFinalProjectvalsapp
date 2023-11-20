import { db } from "./firebaseConfig";
export async function getEmployees() {
  const dbRef = db.ref("/mountainbikes");
  const dataSnapshot = await dbRef.once("value");
  return dataSnapshot.val();
}
