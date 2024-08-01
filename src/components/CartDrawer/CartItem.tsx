import { Button, Center, Container, Group, Text } from '@mantine/core';
import { formatPrice } from '@utils';
import { IconTrash } from '@tabler/icons-react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/useCart';

export function CartItem(product: Partial<CartItemType>) {
  const { name, price, quantity = 1, id } = product;
  const { removeFromCart } = useCart();
  return (
    <>
      <Container p="xs">
        <Group justify="space-between">
          <Center>
            {id && (
              <Button
                color="charcoal.5"
                mr="xs"
                size="xs"
                radius="lg"
                variant="outline"
                onClick={() => removeFromCart(id)}
              >
                <IconTrash aria-label="Trash icon" />
              </Button>
            )}
            <Text fw={700} pr="xs">{`${name}`}</Text>
            <Text>{`x${quantity}`}</Text>
          </Center>
          <Text>{quantity > 1 ? `${formatPrice(price)}/ea` : formatPrice(price)}</Text>
        </Group>
      </Container>
    </>
  );
}
