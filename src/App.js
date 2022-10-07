
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Shop from './components/shop/Shop';
import Inventory from './Inventory/Inventory';
import Main from './Layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Orders from './Orders/Orders';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),

          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }

      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
