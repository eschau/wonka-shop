import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Product } from '@/types';

export const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, 'products'));
  const products: Product[] = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      imageSrc: data.imageSrc,
      description: data.description,
      price: data.price,
      isAvailable: data.isAvailable,
    };
  });
  return products;
};
