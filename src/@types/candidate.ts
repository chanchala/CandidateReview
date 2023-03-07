export interface ICandidate {
  id: {
    name: string;
    value: string;
  };
  email: string;
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
    coordinates: string;
    timezone: string;
  };
  approved: boolean;
  comment: string;
}
export type CandidateContextType = {
  candidates: ICandidate[];
  addCandidate: (candidate: ICandidate) => void;
  resetState: () => void;
  removeCandidate: (id: string) => void;
};
