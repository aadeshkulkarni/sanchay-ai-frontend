import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import ProtectedRoute from "./auth/ProtectedRoute";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Main />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
