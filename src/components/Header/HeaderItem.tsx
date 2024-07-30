import { Link } from 'react-router-dom';
import { Link as LinkType } from '@/types';
import classes from './Header.module.css';

export function HeaderItem({ route, label, icon: Icon }: LinkType) {
  return (
    <Link key={label} to={route} className={classes.link} aria-label={label}>
      {Icon ? <Icon /> : label}
    </Link>
  );
}
