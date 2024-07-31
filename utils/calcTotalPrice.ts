import { CartItem } from '@/types';

export default function calcTotalPrice(cart: CartItem[]) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.id) return tally; // products can be deleted, but they could still be in your cart
    return tally + cartItem.quantity * cartItem.price;
  }, 0);
}
