import { Button, Divider, Drawer, Group, Text } from '@mantine/core';
import _ from 'lodash';
import { useCart } from '@/context/useCart';
import { CartItem } from './CartItem';

export function CartDrawer() {
  const { cartOpened, closeCart, cart, total } = useCart();

  console.log(total, 'TOTAL');
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
            <Text>{total}</Text>
          </Group>
          <Button fullWidth mt="lg" radius="lg">
            Check out
          </Button>
        </>
      )}
    </Drawer>
  );
}
