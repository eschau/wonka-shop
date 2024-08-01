import { noop } from 'lodash';
import * as CartHook from '@/context/useCart/useCart';
import { buildItem } from './buildCartItem';
import { CartContextValue } from '@/context/useCart';

export const mockCart = (overrides: Partial<CartContextValue> = {}) => {
  vi.spyOn(CartHook, 'useCart').mockReturnValue({
    cartOpened: true,
    openCart: noop,
    closeCart: noop,
    cart: [buildItem(), buildItem({ name: 'Giraffe Milk Macaron', id: '2' })],
    addToCart: noop,
    total: 200,
    removeFromCart: noop,
    clearCart: noop,
    numberOfItems: 6,
    ...overrides,
  });
};
