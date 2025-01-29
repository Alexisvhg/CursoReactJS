import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import {app} from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    });

    return products
}

export const getProductsByCategory = async (categoria) => {
    const q = query(collection(db, "productos"), where("categoria", "==", categoria));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
  products.push(doc.data())

})

return products

}


export const getDocument = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

}

export const creatOrder = async (order) => {
try {
    const docRef = await addDoc(collection(db, "orden"), order);
    }catch(e){
        console.error("Error adding document: ", e);
    }
}