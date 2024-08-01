import { Button } from '@mantine/core';
import classes from './Header.module.css';
import { HeaderItem as HeaderItemType } from '@/types';

export function HeaderItem({ label, icon: Icon, action }: HeaderItemType) {
  return (
    <Button onClick={action} variant="transparent" className={classes.link} aria-label={label}>
      <Icon />
    </Button>
  );
}
