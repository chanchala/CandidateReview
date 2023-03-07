import { render, screen } from '@testing-library/react';
import styles from './Button.module.scss';

import Button from './Button';

describe('Button', () => {
  it('renders button with secondary type', () => {
    const { container } = render(
      <Button onClick={() => {}} type={'secondary'}>
        Test Button
      </Button>
    );
    expect(screen.getByText('Test Button')).toBeInTheDocument();
    expect(container.getElementsByClassName(styles.btn).length).toBe(1);
    expect(container.getElementsByClassName(styles.secondaryBtn).length).toBe(
      1
    );
    expect(container.getElementsByClassName(styles.primaryBtn).length).toBe(0);
  });

  it('renders button with primary type', () => {
    const { container } = render(
      <Button onClick={() => {}} type={'primary'}>
        OK
      </Button>
    );
    expect(container.getElementsByClassName(styles.btn).length).toBe(1);
    expect(container.getElementsByClassName(styles.primaryBtn).length).toBe(1);
  });

  it('renders button with info type', () => {
    const { container } = render(
      <Button onClick={() => {}} type={'info'}>
        OK
      </Button>
    );
    expect(container.getElementsByClassName(styles.btn).length).toBe(1);
    expect(container.getElementsByClassName(styles.infoBtn).length).toBe(1);
  });
});
