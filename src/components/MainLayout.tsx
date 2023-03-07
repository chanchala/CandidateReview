import React from 'react';
import { useQuery } from 'react-query';
import { CandidateProvider } from '../context/candidateContext';
import { useGetCandidate } from '../hooks/useGetCandidate';
import CandidateDetails from './candidateDetails/CandidateDetails';
import CandidateList from './candidateList/CandidateList';

const MainLayout: React.FC = () => {
  const { isLoading, error, data, refetch } = useGetCandidate();

  if (isLoading) return <>Loading</>;
  if (error) return <>{error}</>;
  return (
    <div className='container'>
      <CandidateProvider>
        <CandidateDetails candidate={data.results[0]} refetch={refetch} />
        <CandidateList />
      </CandidateProvider>
    </div>
  );
};

export default MainLayout;
