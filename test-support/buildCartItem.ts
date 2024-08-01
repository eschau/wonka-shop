import { CartItem } from '@/types';

export const buildItem = (overrides: Partial<CartItem> = {}): CartItem => ({
  name: 'Wonka Bar',
  imageSrc: 'www.cloudinary.com',
  description: 'Our original dark chocolate bar',
  price: 850,
  isAvailable: true,
  id: '1',
  quantity: 3,
  ...overrides,
});
