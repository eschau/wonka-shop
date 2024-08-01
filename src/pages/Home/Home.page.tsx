import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { Text } from '@mantine/core';
import { Products } from '@/components/Products';
import { CartDrawer } from '@/components/CartDrawer/CartDrawer';
import { getProducts } from '@/clients/firebase/getProducts';
import { FullScreenLoader } from '@/components/Loader/FullScreenLoader';
import { Alert } from '@/components/Alert/Alert';

export function HomePage() {
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
    <>
      <CartDrawer />
      {_.isEmpty(data) || !data ? <Text>No products :\</Text> : <Products products={data} />}
    </>
  );
}
