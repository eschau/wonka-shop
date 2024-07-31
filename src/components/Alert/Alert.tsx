import { Alert as MantineAlert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function Alert({ errorMessage }: { errorMessage: string }) {
  const icon = <IconInfoCircle />;
  return (
    <MantineAlert variant="light" color="red" withCloseButton title="Error" icon={icon}>
      {errorMessage}
    </MantineAlert>
  );
}
