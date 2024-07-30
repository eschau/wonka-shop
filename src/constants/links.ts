import { IconHome, IconShoppingCart } from '@tabler/icons-react';
import { Link } from '@/types';

export const links: Link[] = [
  { route: '/', label: 'Home', icon: IconHome },
  { route: '/cart', label: 'Cart', icon: IconShoppingCart },
];
