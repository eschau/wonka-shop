import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { LINKS } from '@/constants';

export function Navbar({ toggle }: { toggle: () => void }) {
  const [active, setActive] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActive(LINKS.find((link) => link.route === currentPath)?.label || '');
  }, []);

  const navItems = LINKS.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.route}
      key={item.label}
      onClick={() => {
        setActive(item.label);
        toggle();
      }}
    >
      {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{navItems}</div>
    </nav>
  );
}
