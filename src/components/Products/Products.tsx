import { Grid } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/clients/firebase/getProducts';
import { FullScreenLoader } from '../Loader/FullScreenLoader';
import { Product } from './Product';
import { Alert } from '../Alert/Alert';

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

  return (
    <Grid justify="space-around" columns={3}>
      {data?.map((product) => <Product key={product.id} {...product} />)}
    </Grid>
  );
}
