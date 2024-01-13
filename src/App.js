import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import Dashboard from './Routes/DashBoard/Dashboard';
import Loading from './Common/Loading/Loading';
import Sign_Up from './Routes/Sign_Up/Sign_Up';

    function App() {
      const router=createBrowserRouter(createRoutesFromElements(
        <Route element={<Root></Root>} path="/">
          <Route element={<Sign_Up></Sign_Up>} path='/sign-Up'></Route>
          <Route index element={<Home></Home>}></Route>
          <Route element={<Loading></Loading>} path='/loading'></Route>
          <Route element={<Login></Login>} path='/login'></Route>
          <Route element={<Dashboard></Dashboard>} path='/dashboard'></Route>
        </Route>
      ))
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
