import { Products } from '@/components/Products';
import { CartDrawer } from '@/components/CartDrawer/CartDrawer';

export function HomePage() {
  return (
    <>
      <CartDrawer />
      <Products />
    </>
  );
}
