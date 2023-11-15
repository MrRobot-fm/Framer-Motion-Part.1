import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Loading from './components/Loading';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Square = lazy(() => import('./pages/Square'));
const Menu = lazy(() => import('./pages/Menu'));
const Gesture = lazy(() => import('./pages/Gesture'));
const Input = lazy(() => import('./pages/Input'));

const Root = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/animated-square" element={<Square />} />
      <Route path="/vertical-menu" element={<Menu />} />
      <Route path="/gesture" element={<Gesture />} />
      <Route path="/animated-input" element={<Input />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
