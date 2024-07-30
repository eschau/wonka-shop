import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Navbar } from './Navbar';
import { links } from '@/constants';

describe('Header', () => {
  const renderWithRouter = (initialEntries: string[]) =>
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="*" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );

  it('displays all links with labels', () => {
    const { getByRole } = renderWithRouter(['/']);
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

  it('sets the correct link as active based on current path', () => {
    const { getByRole } = renderWithRouter(['/cart']);
    expect(getByRole('link', { name: 'Cart' })).toHaveAttribute('data-active', 'true');
    expect(getByRole('link', { name: 'Home' })).not.toHaveAttribute('data-active', 'true');
  });
});
