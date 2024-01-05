import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import Dashboard from './Routes/DashBoard/Dashboard';

    function App() {
      const router=createBrowserRouter(createRoutesFromElements(
        <Route element={<Root></Root>} path="/">
          <Route index element={<Home></Home>}></Route>
          <Route element={<Login></Login>} path='/login'></Route>
          <Route element={<Dashboard></Dashboard>} path='/dashboard'></Route>
        </Route>
      ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
