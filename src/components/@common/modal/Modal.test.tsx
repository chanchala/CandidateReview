import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Modal from './Modal';

describe('Modal', () => {
  it('renders title and body', () => {
    const setIsOpenFn = vi.fn();
    const okFn = vi.fn();
    render(
      <Modal
        action={okFn}
        setIsOpen={setIsOpenFn}
        title='test modal title'
        body={'test modal body'}
      />
    );

    expect(screen.getByText('test modal title')).toBeInTheDocument();
    expect(screen.getByText('test modal body')).toBeInTheDocument();
  });

  it('Click OK Button', () => {
    const setIsOpenFn = vi.fn();
    const okFn = vi.fn();
    render(
      <Modal
        action={okFn}
        setIsOpen={setIsOpenFn}
        title='test modal title'
        body={'test modal body'}
      />
    );

    const undo = screen.getByText(/Undo/i);
    fireEvent.click(undo);
    expect(okFn).toBeCalledTimes(1);
  });

  it('Click Cancel Button', () => {
    const setIsOpenFn = vi.fn();
    const okFn = vi.fn();
    render(
      <Modal
        action={okFn}
        setIsOpen={setIsOpenFn}
        title='test modal title'
        body={'test modal body'}
      />
    );

    const cancel = screen.getByText(/Cancel/i);
    fireEvent.click(cancel);
    expect(setIsOpenFn).toBeCalledTimes(1);
  });

  it('Click Overlay', () => {
    const setIsOpenFn = vi.fn();
    const okFn = vi.fn();
    render(
      <Modal
        action={okFn}
        setIsOpen={setIsOpenFn}
        title='test modal title'
        body={'test modal body'}
      />
    );

    const darckBG = screen.getByTestId('darkBGOverlay');
    fireEvent.click(darckBG);
    expect(setIsOpenFn).toBeCalledTimes(1);
  });

  it('Click Close Button', () => {
    const setIsOpenFn = vi.fn();
    const okFn = vi.fn();
    render(
      <Modal
        action={okFn}
        setIsOpen={setIsOpenFn}
        title='test modal title'
        body={'test modal body'}
      />
    );

    const closeBtn = screen.getByTestId('closeBtn');
    fireEvent.click(closeBtn);
    expect(setIsOpenFn).toBeCalledTimes(1);
  });
});
