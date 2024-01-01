/* eslint-disable jsx-a11y/alt-text */
import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect,useState } from 'react';
import { jwtDecode } from "jwt-decode";

let flag = false;
const AppLayout = () => {

  const [user, setUser] = useState({});
  const [userSignedIn, setUserSignedIn] = useState(false);

  function handleCredentialResponse(response) {
    console.log("encoded JWT ID Token" + response.credential);
    var userObject = jwtDecode(response.credential);  
    console.log(userObject);
    setUser(userObject);
    setUserSignedIn(true); 
    document.getElementById("signInDiv").hidden = true;
  };

  function handleSignOut(event) {
    setUser({});
    setUserSignedIn(false); 
    document.getElementById("signInDiv").hidden = false;
  }

  function ReturnuserSignedInValue() {
    flag = userSignedIn
    return flag;
  }

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "326832124300-c8m09jd4i65b0f0usfcbu4ucfqgjp99d.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      auto_select: true,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );

    google.accounts.id.prompt();
  },[])
  return (
    <div className="App">
      <Header />
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 && 
        <button onClick={(e) => handleSignOut()}>Sign Out</button>
      }
      
      {
        user && 
        <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
        </div>
      }
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
