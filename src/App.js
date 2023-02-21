import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Category from './Pages/Category/Category/Category';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import News from './Pages/News/News/News';
import TermsAndConditon from './Pages/Others/TermsAndConditon/TermsAndConditon';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import Profile from './Pages/Others/Profile/Profile';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/news')
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: '/news/:id',
          element: <PrivateRoute>
            <News></News>
          </PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/terms',
          element: <TermsAndConditon></TermsAndConditon>
        },
        {
          path: '/profile',
          element: <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        }
      ]
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
