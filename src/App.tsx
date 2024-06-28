import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Aneis } from "./pages/aneis";
import { Brincos } from "./pages/brincos";
import { Colares } from "./pages/colares";
import { Conjuntos } from "./pages/conjuntos";
import { Pulseiras } from "./pages/pulseiras";

import { Layout } from "./components/layout";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Details } from "./pages/aneis/details";
import Admin from "./pages/admin";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/aneis",
        element: <Aneis/>
      },
      {
        path: "/aneis/detalhes",
        element: <Details/>
      },
      {
        path: "/brincos",
        element: <Brincos/>
      },
      {
        path: "/colares",
        element: <Colares/>
      },
      {
        path: "/conjuntos",
        element: <Conjuntos/>
      },
      {
        path: "/pulseiras",
        element: <Pulseiras/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/admin",
    element: <Admin/>
  }
])

export { router };