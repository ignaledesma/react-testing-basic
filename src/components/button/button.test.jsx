import { describe, expect, test, vi} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';

describe('<Button />', () => {
  test('should render the component', () => {
    render(<Button>Button text</Button>);

    expect(screen.getByRole('button', { name: 'Button text' })).toBeDefined();
  });

  test('should call onClick prop when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Button text</Button>);

    await user.click(screen.getByRole('button', { name: 'Button text' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});