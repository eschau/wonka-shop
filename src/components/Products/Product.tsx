import { Button, Container, Flex, Image, NumberInput, Text } from '@mantine/core';
import { formatPrice } from '@utils';
import { useState } from 'react';
import classes from './Product.module.css';
import { Product as ProductType } from '@/types';
import { useCart } from '@/context/useCart';

export function Product({ product }: { product: ProductType }) {
  const { name, imageSrc, description, price, isAvailable } = product;
  const { openCart, addToCart } = useCart();
  const [quantity, setQuantity] = useState<string | number>(1);

  const handleAddToCart = () => {
    const productQuantity = parseInt(quantity.toString(), 10);
    addToCart({ ...product, quantity: productQuantity });
    setQuantity(1);
    openCart();
  };

  return (
    <Container size="xxs" p="sm" classNames={{ root: classes.root }}>
      <Flex direction="column" gap="xs">
        <Image width="100%" radius="md" fit="cover" src={imageSrc} alt={name} />
        <Text fw={700}>{name}</Text>
        <Text size="sm" truncate="end">
          {description}
        </Text>
        <Text>{formatPrice(price)}</Text>
        <NumberInput
          label="Qty"
          value={quantity}
          onChange={setQuantity}
          placeholder="1"
          defaultValue={1}
          min={1}
          max={99}
        />
        <Button radius="lg" onClick={handleAddToCart} disabled={!isAvailable}>
          {isAvailable ? 'Add to Cart' : 'Unavailable'}
        </Button>
      </Flex>
    </Container>
  );
}
