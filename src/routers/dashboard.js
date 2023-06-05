import PagesDashboardHome from '@/pages/dashboard';
import { Route, Routes } from 'react-router-dom';

export default function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="dashboard">
          <Route index element={<PagesDashboardHome />} />
        </Route>
      </Routes>
    </>
  );
}
