import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from'react-redux';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import store from './redux/store';
import CartPage from './components/CartPage/CartPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/cartpage",
  element: <CartPage />
},
{
  path: "/:id",
  element: <>
  <Header /> <Details /> </>
}
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);