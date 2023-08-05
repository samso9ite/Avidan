import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AboutPage from './Pages/About';
import AviationPage from './Pages/Aviation';
import CharterPage from './Pages/CharterPage';
import Concierge from './Pages/Conceirge';
import Contact from './Pages/Contact';
import HomePage from './Pages/Home';
import Interior from './Pages/InteriorPage';
import LeasingPage from './Pages/LeasingPage';
import Services from './Pages/Services';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<HomePage />,
    },
    {
      path: 'about',
      element:<AboutPage />,
    },
    {
      path: 'contact',
      element:<Contact />,
    },
    {
      path: 'services',
      element:<Services />,
    },
    {
      path: 'aviation',
      element:<AviationPage />,
    },
    {
      path: 'concierge',
      element:<Concierge />,
    },
    {
      path: 'interior',
      element:<Interior />,
    },
    {
      path: 'leasing',
      element:<LeasingPage />,
    },
    {
      path: 'charter',
      element:<CharterPage/>,
    },
  ]
)

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
