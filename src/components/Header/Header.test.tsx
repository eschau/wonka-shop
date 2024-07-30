import { render } from '@test-utils';
import { Header } from './Header';
import { links } from '@/constants';

describe('Header', () => {
  const subject = () => render(<Header opened={false} toggle={vi.fn()} />);

  it('displays shop name', () => {
    const { getByText } = subject();
    expect(getByText("Wonka's")).toBeTruthy();
  });

  it('displays header links', () => {
    const { getByRole } = subject();
    links.forEach(({ label, icon }) => {
      const link = getByRole('link', { name: label });
      expect(link).toBeInTheDocument();
      if (icon) {
        expect(link.querySelector('svg')).toBeInTheDocument();
      }
      if (label === 'Home') {
        expect(getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
      } else {
        expect(getByRole('link', { name: label })).toHaveAttribute(
          'href',
          `/${label.toLowerCase()}`
        );
      }
    });
  });
});
