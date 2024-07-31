import { LoadingOverlay } from '@mantine/core';

export function FullScreenLoader() {
  return (
    <LoadingOverlay
      visible
      zIndex={1000}
      overlayProps={{ radius: 'sm', blur: 2 }}
      data-testid="loader"
    />
  );
}
