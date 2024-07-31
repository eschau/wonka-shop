import { Button, Container, Flex, Image, Text } from '@mantine/core';
import { formatPrice } from '../../../utils/formatPrice';
import classes from './Product.module.css';
import { Product as ProductType } from '@/types';

export function Product({ name, imageSrc, description, price, isAvailable }: Partial<ProductType>) {
  return (
    <Container size="xxs" p="sm" classNames={{ root: classes.root }}>
      <Flex direction="column" gap="xs">
        <Image width="100%" radius="md" fit="cover" src={imageSrc} />
        <Text fw={700}>{name}</Text>
        <Text size="sm" truncate="end">
          {description}
        </Text>
        <Text>{formatPrice(price)}</Text>
        <Button disabled={!isAvailable}>Add to cart</Button>
      </Flex>
    </Container>
  );
}
