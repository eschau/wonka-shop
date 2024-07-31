import { Autocomplete, Group, Burger, rem, Title, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { HeaderItem } from './HeaderItem';
import { LINKS } from '@/constants';
import { useCart } from '@/context/useCart';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  const { openCart } = useCart();
  const items = LINKS.map((link) => <HeaderItem {...link} key={link.label} />);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
          <Link to="/" aria-label="Navigate to home">
            <Title order={1} c="gold.7">
              Wonka&apos;s
            </Title>
          </Link>
        </Group>

        <Group>
          <Autocomplete
            classNames={{ input: classes.root }}
            placeholder="Search"
            leftSection={
              <IconSearch color="purple" style={{ width: rem(16), height: rem(16) }} stroke={2} />
            }
            data={[]}
            visibleFrom="xs"
            radius="md"
          />
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Button onClick={openCart}>Open Cart</Button>
        </Group>
      </div>
    </header>
  );
}
