import { renderComponent } from '@/shared/lib/tests/renderComponent';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import { Navbar } from './Navbar';
import { Themes } from '@/app/providers/theme-provider';

describe('Navbar.test', () => {
  test('should render the navbar correctly', () => {
    renderComponent(<Navbar toggleTheme={() => { }} theme={Themes.DARK} />);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });

  test('should toggle modal window', async () => {
    renderComponent(<Navbar toggleTheme={() => { }} theme={Themes.DARK} />);

    const user = userEvent.setup();

    const openModalBtn = screen.getByTestId('nav-modal-open');

    await user.click(openModalBtn);

    await waitFor(() => { });
  });
});
