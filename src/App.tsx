import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Square from './pages/Square';
import Menu from './pages/Menu';
import Gesture from './pages/Gesture';

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
