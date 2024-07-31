import { useDisclosure } from '@mantine/hooks';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { calcTotalPrice, formatPrice } from '@utils';
import { CartItem } from '@/types';

type CartContextValue = {
  cartOpened: boolean;
  openCart: () => void;
  closeCart: () => void;
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  total: string;
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

  // const clearCart = () => {
  //   setCart([]);
  // };

  const total = useMemo(() => {
    const totalPrice = calcTotalPrice(cart);
    return formatPrice(totalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cartOpened: opened, openCart: open, closeCart: close, addToCart, cart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
