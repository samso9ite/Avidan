import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AboutPage from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/Home';
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
  ]
)

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
