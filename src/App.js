import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Projects from "./Pages/Projects";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
    <Header />
    <Outlet />
  </div>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
  ]
}]);

const App = () => <RouterProvider router={router} />

export default App;
