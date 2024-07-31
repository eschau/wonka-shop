import { SimpleGrid, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { getProducts } from '@/clients/firebase/getProducts';
import { FullScreenLoader } from '../Loader/FullScreenLoader';
import { Product } from './Product';
import { Alert } from '@/components/Alert/Alert';

export function Products() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (error) {
    <Alert errorMessage={error.message} />;
  }

  return _.isEmpty(data) ? (
    <Text>No products :\ </Text>
  ) : (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {data?.map((product) => <Product key={product.id} {...product} />)}
    </SimpleGrid>
  );
}
