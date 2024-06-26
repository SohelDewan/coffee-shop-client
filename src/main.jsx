import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'addCoffee',
    element: <AddCoffee />,
  },
  {
    path:'updateCoffee/:id',
    element: <UpdateCoffee />,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element : <SignUp></SignUp>
  },
  {
    path:'/signin',
    element : <SignIn></SignIn>
  },
  {
    path:'/users',
    element : <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
