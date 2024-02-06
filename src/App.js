import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
