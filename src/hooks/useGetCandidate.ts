import { useQuery } from 'react-query';

export const useGetCandidate = () => {
  const results = useQuery('getCandidate', () =>
    fetch('https://randomuser.me/api/').then((res) => res.json())
  );
  return results;
};
