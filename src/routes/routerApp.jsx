
import Productos from "../pages/Productos";
import Home from "../pages/Home";
import LoginRegistro from "../pages/LoginRegistro";
import PaginaProducto from "../pages/PaginaProducto";
import Checkout from "../pages/Checkout.jsx";

export let routerApp = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "productos/",
        element: <Productos />,
      },
      {
        path: "productos/paginaproductos/:id",
        element: <PaginaProducto />,
      },
      {
        path: "login",
        element: <LoginRegistro />,
      },
      {
        path: "checkout",
        element: <Checkout/>
      }
    ],
  },
];
