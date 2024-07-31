import { Container, Flex, Group, Text } from '@mantine/core';
import { formatPrice } from '@utils';
import { CartItem as CartItemType } from '@/types';

export function CartItem(product: Partial<CartItemType>) {
  const { name, price, quantity = 1 } = product;
  return (
    <>
      <Container p="xs">
        <Group justify="space-between">
          <Flex>
            <Text fw={700} pr="xs">{`${name}`}</Text>
            <Text>{`x${quantity}`}</Text>
          </Flex>
          <Text>{quantity > 1 ? `${formatPrice(price)}/ea` : formatPrice(price)}</Text>
        </Group>
      </Container>
    </>
  );
}
