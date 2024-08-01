import { SimpleGrid } from '@mantine/core';
import { Product } from './Product';
import { Product as ProductType } from '@/types';

export function Products({ products }: { products: ProductType[] }) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {products?.map((product) => <Product key={product.id} product={product} />)}
    </SimpleGrid>
  );
}
