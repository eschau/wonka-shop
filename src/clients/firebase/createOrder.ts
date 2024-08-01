import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Order } from '@/types';

export const createOrder = async (orderData: Order): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    return docRef.id;
  } catch (e) {
    return Promise.reject(e);
  }
};
