import GlobalContext from 'context/globalContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from 'routers';
import DashboardRoutes from 'routers/dashboard';
import 'styles/index.scss';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext>
        <BrowserRouter>
          <MainRoute />
          <DashboardRoutes />
        </BrowserRouter>
      </GlobalContext>
    </QueryClientProvider>
  );
}

export default App;
