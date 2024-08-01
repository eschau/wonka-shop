import { useDisclosure } from '@mantine/hooks';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { calcTotalPrice } from '@utils';
import { CartItem } from '@/types';

export type CartContextValue = {
  cartOpened: boolean;
  openCart: () => void;
  closeCart: () => void;
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  total: number;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  numberOfItems: number;
};

export const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevCart, { ...product }];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const total = useMemo(() => calcTotalPrice(cart), [cart]);

  const numberOfItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        cartOpened: opened,
        openCart: open,
        closeCart: close,
        addToCart,
        cart,
        total,
        removeFromCart,
        numberOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
