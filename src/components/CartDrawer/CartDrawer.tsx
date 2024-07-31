import { Drawer, Text } from '@mantine/core';
import { useCart } from '@/context/useCart';
import { CartItem } from './CartItem';

export function CartDrawer() {
  const { cartOpened, closeCart, cart } = useCart();
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
    >
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
    </Drawer>
  );
}
