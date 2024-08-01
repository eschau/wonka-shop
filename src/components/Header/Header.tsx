import { Group, Title } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { CartHeaderItem } from './CartHeaderItem';
import { useCart } from '@/context/useCart';

export function Header() {
  const { openCart, numberOfItems } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group h="100%" px="md">
          <Link to="/" aria-label="Navigate to home">
            <Title order={1} c="gold.7">
              Wonka&apos;s
            </Title>
          </Link>
        </Group>
        <Group>
          <Group ml={50} gap={5}>
            <CartHeaderItem
              label="Cart"
              icon={IconShoppingCart}
              action={openCart}
              cartCount={numberOfItems}
            />
          </Group>
        </Group>
      </div>
    </header>
  );
}
