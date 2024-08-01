import { Button, Center, Flex, Text } from '@mantine/core';
import { formatPrice } from '@utils';
import { Link, useParams } from 'react-router-dom';

export function OrderConfirmationPage() {
  const { transactionId, totalAmount = '0' } = useParams();
  const total = parseInt(totalAmount, 10);

  return (
    <Center>
      <Flex direction="column" align="center" gap="sm">
        <Text size="xl">Thank you for your order {`#${transactionId}`}</Text>
        <Text size="xl">Your total was: {formatPrice(total)}</Text>
        <Link to="/">
          <Button radius="lg">Back to Home</Button>
        </Link>
      </Flex>
    </Center>
  );
}
