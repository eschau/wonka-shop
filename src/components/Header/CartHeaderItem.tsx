import { Button } from '@mantine/core';
import classes from './Header.module.css';
import { HeaderItem } from '@/types';

export function CartHeaderItem({ label, icon: Icon, action, cartCount = 0 }: HeaderItem) {
  return (
    <Button onClick={action} variant="transparent" className={classes.cart} aria-label={label}>
      <Icon />
      {cartCount > 0 && (
        <span aria-hidden="true" data-testid="cart count" className={classes.cartCount}>
          {cartCount}
        </span>
      )}
    </Button>
  );
}
