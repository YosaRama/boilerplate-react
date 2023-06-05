import { Route, Routes } from 'react-router-dom';
import PagesHome from '../pages';
import PagesAbout from '@/pages/about';
import Pages404 from '@/pages/404';

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<PagesHome />} />
          <Route path="about" element={<PagesAbout />} />
          <Route path="*" element={<Pages404 />} />
        </Route>
      </Routes>
    </>
  );
}
