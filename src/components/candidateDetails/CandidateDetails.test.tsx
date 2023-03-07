import { fireEvent, render, screen } from '@testing-library/react';
import styles from './CandidateDetails.module.scss';

import CandidateDetails from './CandidateDetails';
import { ICandidate } from '../../@types/candidate';

const candidate: ICandidate = {
  id: {
    name: 'testName',
    value: 'testId',
  },
  email: 'testEmail@gmail.com',
  dob: {
    age: 22,
  },
  phone: '720 434 4444',
  cell: '720 434 4442',
  picture: {
    large: 'test.com',
  },
  name: {
    title: 'Mr',
    first: 'George',
    last: 'Smith',
  },
  location: {
    street: {
      number: '3232',
      name: 'Main str',
    },
    city: 'Denver',
    state: 'CO',
    postcode: '80999',
    coordinates: '1232132',
    timezone: 'MST',
  },
  approved: true,
  comment: 'test comment',
};

describe('CandidateDetails', () => {
  it('renders CandidateDetails with info, comment, approve', () => {
    render(<CandidateDetails candidate={candidate} />);

    expect(screen.getByText('Approve')).toBeInTheDocument();
    expect(screen.getByText('Reject')).toBeInTheDocument();

    const textArea = screen.getByTestId('textAreaComment');
    fireEvent.change(textArea, { target: { value: candidate.comment } });
    const textAreaValue = (textArea as HTMLInputElement).value;
    expect(textAreaValue).toBe(candidate.comment);

    const approve = screen.getByText(/Approve/i);
    fireEvent.click(approve);
  });

  it('renders CandidateDetails with info', () => {
    render(<CandidateDetails candidate={candidate} />);

    const textArea = screen.getByTestId('textAreaComment');
    fireEvent.change(textArea, { target: { value: candidate.comment } });
    const textAreaValue = (textArea as HTMLInputElement).value;
    expect(textAreaValue).toBe(candidate.comment);

    const Reject = screen.getByText(/Reject/i);
    fireEvent.click(Reject);

    const Reset = screen.getByText(/Reset/i);
    fireEvent.click(Reset);
  });
});
