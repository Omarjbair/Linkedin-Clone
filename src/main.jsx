import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './pages/Login.jsx';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Error';
import AuthCheck from './components/AuthCheck.jsx';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <AuthCheck><Login/></AuthCheck>,
      },
      {
        path: "/home",
        element: <Home/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  );
