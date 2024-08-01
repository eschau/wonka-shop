import * as GetProducts from '@/clients/firebase/getProducts';
import { mockProducts } from './mocks/mockProducts';

export const mockGetProducts = (isEmpty: boolean = false) => {
  vi.spyOn(GetProducts, 'getProducts').mockResolvedValue(isEmpty ? [] : mockProducts);
};
