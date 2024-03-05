import React, { Suspense } from 'react';
import './assets/style/default.css';
import './assets/style/colors.css';
import './assets/style/shared.css';
import './assets/style/size.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, Checkout, ErrorPage, Home, Layout, Product, ProductList } from './pages';
import { Loading } from './components';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: 'cart',
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: 'product/:product_id',
          element: (
            <Suspense fallback={<Loading />}>
              <Product />
            </Suspense>
          ),
        },
        {
          path: 'product-list/:category',
          element: (
            <Suspense fallback={<Loading />}>
              <ProductList />
            </Suspense>
          ),
        },
        {
          path: 'checkout',
          element: (
            <Suspense fallback={<Loading />}>
              <Checkout />
            </Suspense>
          )
        }
      ],
    },
    {
      path: '*',
      element: <Suspense fallback={<Loading />}><ErrorPage /></Suspense>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
