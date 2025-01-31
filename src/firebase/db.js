import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
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

export const getProductsByTipo = async (categoria) => {
    const q = query(collection(db, "productos"), where("Tipo", "==", categoria));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
    products.push(doc.data());

})

return products

}


export const getDocument = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!");
    }

}

export const creatOrder = async (order) => {
try {
    const docRef = await addDoc(collection(db, "ordenes"), order);
    }catch(e){
        console.error("Error agregando Orden de compra", e);
    }
}