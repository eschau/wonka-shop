import { Button, Divider, Drawer, em, Group, Text } from '@mantine/core';
import _ from 'lodash';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { formatPrice } from '@utils';
import { useCart } from '@/context/useCart';
import { CartItem } from './CartItem';
import { createOrder } from '@/clients/firebase/createOrder';
import { Order } from '@/types';
import { Alert } from '../Alert/Alert';

export function CartDrawer() {
  const { cartOpened, closeCart, cart, total, clearCart } = useCart();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const navigate = useNavigate();

  const { mutate: submitOrder } = useMutation({
    mutationFn: (body: Order) => createOrder(body),
    onSuccess: (transactionId) => {
      navigate(`/order-confirmation/${transactionId}/${total}`);
      clearCart();
      closeCart();
    },
    onError: (e) => <Alert errorMessage={e.message} />,
  });

  const orderData: Order = useMemo(
    () => ({
      items: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      total,
    }),
    [cart, total]
  );

  const handleCheckout = () => {
    submitOrder(orderData);
  };

  return (
    <Drawer
      opened={cartOpened}
      onClose={closeCart}
      title={
        <Text size="lg" fw={700}>
          Review your order
        </Text>
      }
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      size={isMobile ? '100%' : 'sm'}
      closeButtonProps={{ 'aria-label': 'Close modal' }}
    >
      {_.isEmpty(cart) ? (
        <Text>No items in cart</Text>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <Divider />
          <Group p="sm" justify="space-between">
            <Text>Total</Text>
            <Text>{formatPrice(total)}</Text>
          </Group>
          <Button onClick={handleCheckout} fullWidth mt="lg" radius="lg">
            Check out
          </Button>
        </>
      )}
    </Drawer>
  );
}
