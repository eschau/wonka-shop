import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async () => {
  const snapshot = (await getDocs(collection(db, 'products'))).docs;
  const docs = snapshot.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return docs;
};
