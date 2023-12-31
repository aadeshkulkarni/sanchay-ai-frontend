import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
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
      path: "/main",
      element: <Main />,
    },
    {
      path: "/",
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
