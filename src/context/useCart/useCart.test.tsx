import { renderHook, act } from '@testing-library/react-hooks';
import React, { useContext } from 'react';
import { buildItem } from '@test-support';
import { CartItem } from '@/types';
import { CartContext, CartProvider } from './context';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('CartProvider', () => {
  it('should add items to the cart', () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product: CartItem = buildItem();

    act(() => {
      result?.current?.addToCart(product);
    });

    expect(result?.current?.cart).toEqual([product]);
  });

  it('should remove items from the cart', () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product: CartItem = buildItem();

    act(() => {
      result?.current?.addToCart(product);
    });

    act(() => {
      result?.current?.removeFromCart(product.id);
    });

    expect(result?.current?.cart).toEqual([]);
  });

  it('should clear the cart', () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product: CartItem = buildItem();

    act(() => {
      result?.current?.addToCart(product);
    });

    act(() => {
      result?.current?.clearCart();
    });

    expect(result?.current?.cart).toEqual([]);
  });

  it('should calculate the total price', () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product1: CartItem = buildItem();
    const product2: CartItem = buildItem({
      id: '2',
      name: 'Silver Lining',
      price: 500,
      quantity: 2,
    });

    act(() => {
      result?.current?.addToCart(product1);
      result?.current?.addToCart(product2);
    });

    expect(result?.current?.total).toBe(3550);
  });
});
