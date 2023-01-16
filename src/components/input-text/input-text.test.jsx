import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputText from './input-text';

describe('<InputText />', () => {
  test('should render the component', () => {
    render(<InputText label="Favorite color:" id="color" placeholder="Insert your favorite color..." value="Yellow" />);

    expect(screen.getByRole('textbox', { name: 'Favorite color:' })).toBeDefined();
    expect(screen.getByLabelText('Favorite color:')).toBeDefined();
    expect(screen.getByPlaceholderText('Insert your favorite color...')).toBeDefined();
    expect(screen.getByDisplayValue('Yellow'));
  });
});
