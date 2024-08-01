import { Icon } from '@tabler/icons-react';

export type HeaderItem = {
  label: string;
  icon: Icon;
  action: () => void;
};
