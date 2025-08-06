import "../src/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // whenever it encounters error it show this page
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
      , {
        path: "contact",
        element: <Contact />
      }
      ,
      {
        path: "country",
        element: <Country />
      },
            {
        path: "country/:id", //dynamic rout
        element: <CountryDetails />
        
      }


    ]

  }
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;