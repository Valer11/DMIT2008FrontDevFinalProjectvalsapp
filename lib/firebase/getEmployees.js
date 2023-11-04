import {db} from './firebaseConfig'
export async function getEmployees () {
    const dbRef =  db.ref('/employees')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
    
}