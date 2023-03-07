import { render, screen } from '@testing-library/react';

import Panel from './Panel';

describe('Panel', () => {
  it('renders headline', () => {
    render(
      <Panel>
        <h1>Test</h1>
      </Panel>
    );
    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Test');
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
