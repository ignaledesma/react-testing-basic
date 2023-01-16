import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputStepper from './input-stepper';

describe('<InputStepper />', () => {
  test('should render the component', () => {
    render(<InputStepper defaultValue={0} />);

    expect(screen.getByRole('button', { name: '-' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+' })).toBeDefined();  
    expect(screen.getByText('0'));
  });

  test('should add', async () => {
    const user = userEvent.setup();
    render(<InputStepper defaultValue={5} />);

    await user.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('6'));
  });

  test('should add twice', async () => {
    const user = userEvent.setup();
    render(<InputStepper defaultValue={5} />);

    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('7'));
  });

  test('should remove', async () => {
    const user = userEvent.setup();
    render(<InputStepper defaultValue={5} />);

    await user.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('4'));
  });

  test('should remove and get negative number', async () => {
    const user = userEvent.setup();
    render(<InputStepper defaultValue={0} />);

    await user.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('-1'));
  });
});