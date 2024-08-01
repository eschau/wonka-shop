import { SimpleGrid, Text } from '@mantine/core';
import _ from 'lodash';
import { Product } from './Product';
import { Product as ProductType } from '@/types';

export function Products({ products }: { products: ProductType[] }) {
  return _.isEmpty(products) ? (
    <Text>No products :\</Text>
  ) : (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {products?.map((product) => <Product key={product.id} product={product} />)}
    </SimpleGrid>
  );
}
