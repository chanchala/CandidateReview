import * as React from 'react';
import { CandidateContextType, ICandidate } from '../@types/candidate';

const CANDIDATES_KEY = 'CANDIDATES_KEY';
const initialState: CandidateContextType = {
  candidates: JSON.parse(localStorage.getItem(CANDIDATES_KEY) || '[]') || [],
  addCandidate: (candidate: ICandidate) => undefined,
  resetState: () => undefined,
  removeCandidate: (id: string) => undefined,
};

export const CandidateContext =
  React.createContext<CandidateContextType>(initialState);
export default CandidateContext;

interface Props {
  children?: React.ReactNode;
}

export const CandidateProvider = ({ children }: Props) => {
  const [state, setState] = React.useState<CandidateContextType>({
    ...initialState,
    addCandidate: (candidate: ICandidate) => {
      setState((state) => ({
        ...state,
        candidates: [...state.candidates, candidate],
      }));
    },
    resetState: () => {
      localStorage.removeItem(CANDIDATES_KEY);
      setState((state) => ({
        ...state,
        candidates: [],
      }));
    },
    removeCandidate: (id: string) => {
      setState((state) => {
        const index: number = state.candidates.findIndex(
          (candidate) => candidate.id.value === id
        );
        state.candidates.splice(index, 1);
        return {
          ...state,
          candidates: [...state.candidates],
        };
      });
    },
  });

  React.useEffect(() => {
    localStorage.setItem(CANDIDATES_KEY, JSON.stringify(state.candidates));
  }, [state.candidates]);

  return (
    <CandidateContext.Provider value={state}>
      {children}
    </CandidateContext.Provider>
  );
};
