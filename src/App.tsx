import { QueryClient, QueryClientProvider } from 'react-query';
import MainLayout from './components/MainLayout';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <MainLayout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
