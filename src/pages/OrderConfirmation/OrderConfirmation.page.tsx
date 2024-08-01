import { Button, Center, Flex, Text, Title } from '@mantine/core';
import { formatPrice } from '@utils';
import { Link, useParams } from 'react-router-dom';

export function OrderConfirmationPage() {
  const { transactionId, totalAmount = '0' } = useParams();
  const total = parseInt(totalAmount, 10);

  return (
    <Center>
      <Flex direction="column" align="center" gap="sm">
        <Text size="md">{`Order #${transactionId}`}</Text>
        <Title fw="700">Thank you!</Title>
        <Text size="lg">Your total was: {formatPrice(total)}</Text>
        <Link to="/">
          <Button radius="lg">Back to Home</Button>
        </Link>
      </Flex>
    </Center>
  );
}
