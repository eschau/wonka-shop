import { Autocomplete, Group, Burger, rem, Title, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconShoppingCart, TablerIcon } from '@tabler/icons-react';
import classes from './Header.module.css';

type Link = {
  route: string;
  label: string;
  icon?: TablerIcon;
};

const links: Link[] = [
  { route: '/', label: 'Home', icon: undefined },
  { route: '/cart', label: 'Shopping Cart', icon: IconShoppingCart },
];

function HeaderItem({ route, label, icon: Icon }: Link) {
  return (
    <a key={label} href={route} className={classes.link} aria-label={label}>
      {Icon ? <Icon /> : label}
    </a>
  );
}

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => <HeaderItem {...link} key={link.label} />);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
          <Title order={1} c="deep-purple">
            Wonka's
          </Title>
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={[]}
            visibleFrom="xs"
          />
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}
