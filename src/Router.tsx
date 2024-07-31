import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HomePage } from './pages/Home/Home.page';
import { Header } from '@/components/Header/Header';
import { CartPage } from './pages/Cart.page';
import { Navbar } from './components/Navbar/Navbar';

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 0, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="xl"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar p="md" hiddenFrom="sm">
        <Navbar toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
