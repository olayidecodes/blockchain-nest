import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { Blog, Faq, Home, Login, Register, Single, Write } from "./pages";
import { Navbar } from './components';
import Footer from './components/Footer';
import './App.scss'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "/",
      element: <Home />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
